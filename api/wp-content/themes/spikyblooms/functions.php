<?php

//Allow API Requests
add_action('init', function () {
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: POST, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization");
});
