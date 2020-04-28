<?php

$site = file_get_contents("https://g1.globo.com");

$dom = new DOMDocument();

$dom->loadHTML($site);

print_r($dom);