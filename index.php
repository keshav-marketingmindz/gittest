<?php

$url = "https://app.ticketmaster.com/discovery/v2/events.json?";

$apikey = "K2G8cPlDDiVd1dUPzlGvTitQfKC6gwOW";

dfbgdbs
bsd
fsdfg
dsfgdsfgsdf

$field_string = http_build_query($params);
$response = file_get_contents($url.$field_string);
$response = json_decode($response, true);
echo "<pre>";
print_r($response);
echo "</pre>";
