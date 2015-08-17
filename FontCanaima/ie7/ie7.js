/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'FontCanaima\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-sofware_libre': '&#xe600;',
		'icon-altamente_seguro': '&#xe601;',
		'icon-anterior': '&#xe602;',
		'icon-aplicaciones_ofimaticas': '&#xe603;',
		'icon-arepa_linux': '&#xe604;',
		'icon-ayuda': '&#xe605;',
		'icon-boton': '&#xe606;',
		'icon-buscar': '&#xe607;',
		'icon-buscar_experto': '&#xe608;',
		'icon-canaima_caribay': '&#xe628;',
		'icon-canaima_colibri': '&#xe629;',
		'icon-canaima_comunitario': '&#xe62a;',
		'icon-canaima_educativo': '&#xe62b;',
		'icon-canaimaGNU-LINUX': '&#xe62c;',
		'icon-canaimaGNU-LINUX_blanco': '&#xe62d;',
		'icon-canaima_popular': '&#xe62e;',
		'icon-canaima_popular_simbolo': '&#xe62f;',
		'icon-canaima_universitario': '&#xe630;',
		'icon-caracteristicas': '&#xe631;',
		'icon-caribay': '&#xe632;',
		'icon-cayapa_canaima': '&#xe633;',
		'icon-colibri': '&#xe634;',
		'icon-compatibilidad_hardware': '&#xe635;',
		'icon-componentes_RNA': '&#xe636;',
		'icon-comunal': '&#xe637;',
		'icon-css3': '&#xe638;',
		'icon-descarga_canaima_caribay': '&#xe640;',
		'icon-descarga_canaima_colibri': '&#xe643;',
		'icon-descarga_canaima_comunitario': '&#xe646;',
		'icon-descarga_canaima_educativo': '&#xe64b;',
		'icon-descarga_canaima_geocanaima': '&#xe64e;',
		'icon-descarga_canaima_popular': '&#xe651;',
		'icon-descargas': '&#xe655;',
		'icon-disco_canaima': '&#xe657;',
		'icon-Django': '&#xe658;',
		'icon-documentacion': '&#xe659;',
		'icon-educativo': '&#xe65a;',
		'icon-equipos': '&#xe65b;',
		'icon-estar_conectado': '&#xe65c;',
		'icon-facil_demostracion': '&#xe65d;',
		'icon-fecha': '&#xe65e;',
		'icon-forense': '&#xe65f;',
		'icon-forja_canaima': '&#xe660;',
		'icon-fotografia_video': '&#xe661;',
		'icon-geo': '&#xe662;',
		'icon-geo_canaima': '&#xe663;',
		'icon-html5': '&#xe664;',
		'icon-html5_logo': '&#xe66e;',
		'icon-jquery': '&#xe66f;',
		'icon-libre_virus_espias': '&#xe670;',
		'icon-logo_css3': '&#xe671;',
		'icon-maquina_canaima_instalado': '&#xe672;',
		'icon-mas_programas': '&#xe673;',
		'icon-mercado_de_servicios': '&#xe674;',
		'icon-miembro_hombre': '&#xe675;',
		'icon-miembro_mujer': '&#xe676;',
		'icon-miles_aplicaciones_libres': '&#xe677;',
		'icon-musica_tmoviles': '&#xe678;',
		'icon-navegando_web': '&#xe679;',
		'icon-necesito_ayuda': '&#xe67a;',
		'icon-obten_canaima': '&#xe67b;',
		'icon-obtener_codigos_fuentes': '&#xe67c;',
		'icon-organizacion': '&#xe67d;',
		'icon-Plone_logo': '&#xe67e;',
		'icon-popular': '&#xe67f;',
		'icon-porque_usar_canaima': '&#xe680;',
		'icon-porque_usar_Softlibre': '&#xe681;',
		'icon-prueba_canaimaAI': '&#xe682;',
		'icon-que_hay_nuevo': '&#xe683;',
		'icon-quien_usa_canaima': '&#xe684;',
		'icon-redesSociales_email': '&#xe685;',
		'icon-repositorioP_Fcenditel': '&#xe686;',
		'icon-reuniones': '&#xe687;',
		'icon-servicios_empresariales': '&#xe688;',
		'icon-siguiente': '&#xe68a;',
		'icon-sistema_poderoso': '&#xe68b;',
		'icon-softwarelibre_CNTI': '&#xe68c;',
		'icon-software_nuestra_medida': '&#xe68d;',
		'icon-unirse_canaima': '&#xe68e;',
		'icon-yo_quiero_aprender': '&#xe68f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
