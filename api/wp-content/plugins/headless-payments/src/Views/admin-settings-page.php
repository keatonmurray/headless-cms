<!-- This is the main form that displays in the WP Admin -->
<div class="wrap">
    <h1>Headless Payments Settings</h1>
    <form method="post" action="options.php">
        <?php
            settings_fields('hp_settings_group');
            do_settings_sections('hp_settings_group');
        ?>
        <table class="form-table">
            <tr valign="top">
                <th scope="row">Mode</th>
                <td>
                    <select name="hp_paypal_mode">
                        <option value="sandbox" <?php selected(get_option('hp_paypal_mode'), 'sandbox'); ?>>Sandbox</option>
                        <option value="live" <?php selected(get_option('hp_paypal_mode'), 'live'); ?>>Live</option>
                    </select>
                </td>
            </tr>
            <tr valign="top">
                <th scope="row">PayPal Client ID</th>
                <td><input type="text" name="hp_paypal_client_id" value="<?php echo esc_attr(get_option('hp_paypal_client_id')); ?>" class="regular-text" /></td>
            </tr>
            <tr valign="top">
                <th scope="row">PayPal Secret</th>
                <td><input type="password" name="hp_paypal_secret" value="<?php echo esc_attr(get_option('hp_paypal_secret')); ?>" class="regular-text" /></td>
            </tr>
        </table>
        <?php submit_button(); ?>
    </form>
</div>
