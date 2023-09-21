
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const MONGODB_URL: string;
	export const MONGODB_DB_NAME: string;
	export const MONGODB_DIRECT_CONNECTION: string;
	export const COOKIE_NAME: string;
	export const HF_ACCESS_TOKEN: string;
	export const HF_API_ROOT: string;
	export const SERPER_API_KEY: string;
	export const SERPAPI_KEY: string;
	export const OPENID_CLIENT_ID: string;
	export const OPENID_CLIENT_SECRET: string;
	export const OPENID_SCOPES: string;
	export const OPENID_PROVIDER_URL: string;
	export const USE_CLIENT_CERTIFICATE: string;
	export const CERT_PATH: string;
	export const KEY_PATH: string;
	export const CA_PATH: string;
	export const CLIENT_KEY_PASSWORD: string;
	export const REJECT_UNAUTHORIZED: string;
	export const MODELS: string;
	export const OLD_MODELS: string;
	export const PARQUET_EXPORT_DATASET: string;
	export const PARQUET_EXPORT_HF_TOKEN: string;
	export const PARQUET_EXPORT_SECRET: string;
	export const RATE_LIMIT: string;
	export const MESSAGES_BEFORE_LOGIN: string;
	export const LESSOPEN: string;
	export const LANGUAGE: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const XDG_SESSION_TYPE: string;
	export const GIT_ASKPASS: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const CHROME_DESKTOP: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM_VERSION: string;
	export const DESKTOP_SESSION: string;
	export const NVM_BIN: string;
	export const npm_package_json: string;
	export const NVM_INC: string;
	export const HOMEBREW_PREFIX: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT_PATH: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const LC_MONETARY: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const CINNAMON_VERSION: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const COLOR: string;
	export const NVM_DIR: string;
	export const npm_config_metrics_registry: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const INFOPATH: string;
	export const LOGNAME: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const GTK_OVERLAY_SCROLLING: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_cache: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const GDM_LANG: string;
	export const HOMEBREW_CELLAR: string;
	export const GTK3_MODULES: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_SESSION_PATH: string;
	export const LC_ADDRESS: string;
	export const GNOME_TERMINAL_SCREEN: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LC_TELEPHONE: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const GNOME_TERMINAL_SERVICE: string;
	export const TERM_PROGRAM: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const SHELL: string;
	export const LC_NAME: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const NO_AT_BRIDGE: string;
	export const GDMSESSION: string;
	export const LESSCLOSE: string;
	export const LC_MEASUREMENT: string;
	export const GPG_AGENT_INFO: string;
	export const LC_IDENTIFICATION: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XDG_VTNR: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_global_prefix: string;
	export const HOMEBREW_REPOSITORY: string;
	export const LC_NUMERIC: string;
	export const npm_command: string;
	export const LC_PAPER: string;
	export const MANPATH: string;
	export const VTE_VERSION: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_ORIGIN: string;
	export const PUBLIC_SHARE_PREFIX: string;
	export const PUBLIC_GOOGLE_ANALYTICS_ID: string;
	export const PUBLIC_DEPRECATED_GOOGLE_ANALYTICS_ID: string;
	export const PUBLIC_ANNOUNCEMENT_BANNERS: string;
	export const PUBLIC_APP_NAME: string;
	export const PUBLIC_APP_ASSETS: string;
	export const PUBLIC_APP_COLOR: string;
	export const PUBLIC_APP_DATA_SHARING: string;
	export const PUBLIC_APP_DISCLAIMER: string;
	export const PUBLIC_VERSION: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		MONGODB_URL: string;
		MONGODB_DB_NAME: string;
		MONGODB_DIRECT_CONNECTION: string;
		COOKIE_NAME: string;
		HF_ACCESS_TOKEN: string;
		HF_API_ROOT: string;
		SERPER_API_KEY: string;
		SERPAPI_KEY: string;
		OPENID_CLIENT_ID: string;
		OPENID_CLIENT_SECRET: string;
		OPENID_SCOPES: string;
		OPENID_PROVIDER_URL: string;
		USE_CLIENT_CERTIFICATE: string;
		CERT_PATH: string;
		KEY_PATH: string;
		CA_PATH: string;
		CLIENT_KEY_PASSWORD: string;
		REJECT_UNAUTHORIZED: string;
		MODELS: string;
		OLD_MODELS: string;
		PARQUET_EXPORT_DATASET: string;
		PARQUET_EXPORT_HF_TOKEN: string;
		PARQUET_EXPORT_SECRET: string;
		RATE_LIMIT: string;
		MESSAGES_BEFORE_LOGIN: string;
		LESSOPEN: string;
		LANGUAGE: string;
		USER: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		XDG_SESSION_TYPE: string;
		GIT_ASKPASS: string;
		npm_node_execpath: string;
		SHLVL: string;
		npm_config_noproxy: string;
		HOME: string;
		CHROME_DESKTOP: string;
		OLDPWD: string;
		TERM_PROGRAM_VERSION: string;
		DESKTOP_SESSION: string;
		NVM_BIN: string;
		npm_package_json: string;
		NVM_INC: string;
		HOMEBREW_PREFIX: string;
		GTK_MODULES: string;
		XDG_SEAT_PATH: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		LC_MONETARY: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		CINNAMON_VERSION: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		COLOR: string;
		NVM_DIR: string;
		npm_config_metrics_registry: string;
		QT_QPA_PLATFORMTHEME: string;
		INFOPATH: string;
		LOGNAME: string;
		_: string;
		npm_config_prefix: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		GTK_OVERLAY_SCROLLING: string;
		XDG_SESSION_ID: string;
		npm_config_cache: string;
		GNOME_DESKTOP_SESSION_ID: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		GDM_LANG: string;
		HOMEBREW_CELLAR: string;
		GTK3_MODULES: string;
		NODE: string;
		npm_package_name: string;
		XDG_SESSION_PATH: string;
		LC_ADDRESS: string;
		GNOME_TERMINAL_SCREEN: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		DISPLAY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		LC_TELEPHONE: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		VSCODE_GIT_IPC_HANDLE: string;
		GNOME_TERMINAL_SERVICE: string;
		TERM_PROGRAM: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		XDG_GREETER_DATA_DIR: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		SHELL: string;
		LC_NAME: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		NO_AT_BRIDGE: string;
		GDMSESSION: string;
		LESSCLOSE: string;
		LC_MEASUREMENT: string;
		GPG_AGENT_INFO: string;
		LC_IDENTIFICATION: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XDG_VTNR: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_DIRS: string;
		npm_config_global_prefix: string;
		HOMEBREW_REPOSITORY: string;
		LC_NUMERIC: string;
		npm_command: string;
		LC_PAPER: string;
		MANPATH: string;
		VTE_VERSION: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_ORIGIN: string;
		PUBLIC_SHARE_PREFIX: string;
		PUBLIC_GOOGLE_ANALYTICS_ID: string;
		PUBLIC_DEPRECATED_GOOGLE_ANALYTICS_ID: string;
		PUBLIC_ANNOUNCEMENT_BANNERS: string;
		PUBLIC_APP_NAME: string;
		PUBLIC_APP_ASSETS: string;
		PUBLIC_APP_COLOR: string;
		PUBLIC_APP_DATA_SHARING: string;
		PUBLIC_APP_DISCLAIMER: string;
		PUBLIC_VERSION: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
