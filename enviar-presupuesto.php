<?php
/**
 * Recibe el formulario del pop-up "Solicitar presupuesto" y lo reenvía por email.
 * No guarda nada en disco ni en base de datos: solo relay a CONTACTO_EMAIL.
 */

header("Content-Type: application/json; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["ok" => false, "error" => "method-not-allowed"]);
    exit;
}

const CONTACTO_EMAIL = "info@blizztherm.es";

function campo($nombre) {
    return isset($_POST[$nombre]) ? trim((string) $_POST[$nombre]) : "";
}

// Elimina saltos de línea para evitar inyección de cabeceras en el email.
function limpiar($texto) {
    return trim(preg_replace('/[\r\n]+/', " ", $texto));
}

// Honeypot: si un bot rellena este campo oculto, respondemos "ok" sin enviar nada.
if (campo("website") !== "") {
    echo json_encode(["ok" => true]);
    exit;
}

$nombre = limpiar(campo("nombre"));
$empresa = limpiar(campo("empresa"));
$localidad = limpiar(campo("localidad"));
$telefono = limpiar(campo("telefono"));
$email = limpiar(campo("email"));
$consulta = trim(campo("consulta"));
$producto = limpiar(campo("producto"));
$idioma = campo("idioma") === "en" ? "en" : "es";

if ($nombre === "" || $telefono === "" || $email === "") {
    http_response_code(422);
    echo json_encode(["ok" => false, "error" => "missing-fields"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(["ok" => false, "error" => "invalid-email"]);
    exit;
}

$asuntoBase = $idioma === "en" ? "Quote request" : "Solicitud de presupuesto";
$asunto = $producto !== "" ? "$asuntoBase — $producto" : $asuntoBase;

$lineas = [];
$lineas[] = "Nombre y apellidos: $nombre";
if ($empresa !== "") $lineas[] = "Empresa: $empresa";
if ($localidad !== "") $lineas[] = "Localidad: $localidad";
$lineas[] = "Teléfono: $telefono";
$lineas[] = "Email: $email";
if ($producto !== "") $lineas[] = "Equipo: $producto";
$lineas[] = "";
$lineas[] = "Consulta:";
$lineas[] = $consulta !== "" ? $consulta : "(sin detalles adicionales)";

$cuerpo = implode("\n", $lineas);

$host = isset($_SERVER["HTTP_HOST"]) ? preg_replace('/[^a-zA-Z0-9.\-]/', "", $_SERVER["HTTP_HOST"]) : "blizztherm.es";
$remitente = "catalogo@$host";

$cabeceras = [];
$cabeceras[] = "From: Catálogo BlizzTherm <$remitente>";
$cabeceras[] = "Reply-To: $nombre <$email>";
$cabeceras[] = "MIME-Version: 1.0";
$cabeceras[] = "Content-Type: text/plain; charset=utf-8";

$enviado = @mail(CONTACTO_EMAIL, "=?UTF-8?B?" . base64_encode($asunto) . "?=", $cuerpo, implode("\r\n", $cabeceras));

if (!$enviado) {
    http_response_code(502);
    echo json_encode(["ok" => false, "error" => "mail-failed"]);
    exit;
}

echo json_encode(["ok" => true]);
