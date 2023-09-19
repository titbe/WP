<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9R!OUQ7}$_.g~wd67fu#6(ZfIMP2k=XN3`Q3QTEb.!3,lg#rs2Se}?y5/etT)vY`' );
define( 'SECURE_AUTH_KEY',  'Jw4|c&fl?vwSBIrn#*:fEJWzOu5ahBxr)1/7Np|OA|e(<;Y$ACdx%qTULi}k@NRb' );
define( 'LOGGED_IN_KEY',    '|/W;MtpaU.0_JI~l7C>3Q;HvzK/K0aUk6q$C>0lNif;U&k23Nk~IC (I{K*79zn<' );
define( 'NONCE_KEY',        '<_yr?~#$^-q} OcgJGOIZ/5DE23WAjLdBI|}WKXu@_q;NxHFJT/KNM2,@?IU~Xqy' );
define( 'AUTH_SALT',        ':XjuO~K}9$x2he*Wb]V$uF!H=wt`B-4urWo;Zbb+$Q+lYws4GF@C2ol >O>?d.wd' );
define( 'SECURE_AUTH_SALT', '4H;3qr>t}Mw5I$9j{?->oWiQkA ]A+BXyTa_,C?W}rl>%AXS@<nGGbj>*Q7%N)C?' );
define( 'LOGGED_IN_SALT',   '6WXYF|AkJUuNhU19.Tzy8:EhQ!*tUrfvQh0cR#(dk[+kS-rX*15usdlR]p}3K|vz' );
define( 'NONCE_SALT',       'S<AyzjMH7|Wor&X~~=#oMzkSSF[Ah;d /FU~O5@o5l;NnKyhypPMk/@l(jBz<$%:' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
