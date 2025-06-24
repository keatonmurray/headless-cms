<?php

//Allow API Requests
add_action('init', function () {
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: POST, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization");
});

// Register Menus
function enable_classic_menus() {
    register_nav_menus([
        'primary' => __('Primary Menu'),
        'footer'  => __('Footer Menu'),
    ]);
}
add_action('after_setup_theme', 'enable_classic_menus');

