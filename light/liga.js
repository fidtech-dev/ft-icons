/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'dialog': '&#xe97f;',
            'faq': '&#xe980;',
            'generic_document': '&#xe97d;',
            'xls': '&#xe97e;',
            'filter': '&#xe97c;',
            'hierachy': '&#xe945;',
            'minus': '&#xe977;',
            'plus': '&#xe978;',
            'role': '&#xe979;',
            'sectors': '&#xe97a;',
            'user_hierachy': '&#xe97b;',
            'down_arrow_line': '&#xe907;',
            'left_arrow_line': '&#xe942;',
            'right_arrow_line': '&#xe943;',
            'up_arrow_line': '&#xe944;',
            'more_vert': '&#xe976;',
            'archive': '&#xe972;',
            'unarchive': '&#xe974;',
            'chat': '&#xe973;',
            'attach': '&#xe969;',
            'doc': '&#xe96b;',
            'file': '&#xe96c;',
            'path_finder': '&#xe96d;',
            'pdf': '&#xe96e;',
            'send_form': '&#xe96f;',
            'alert': '&#xe900;',
            'app_qr': '&#xe901;',
            'bike': '&#xe902;',
            'bike_code': '&#xe903;',
            'bike_cover': '&#xe904;',
            'blockchain': '&#xe905;',
            'calefaction': '&#xe906;',
            'car': '&#xe975;',
            'car_b': '&#xe908;',
            'car_bl': '&#xe909;',
            'car_br': '&#xe90a;',
            'car_cover': '&#xe90b;',
            'car_f': '&#xe90c;',
            'car_fl': '&#xe90d;',
            'car_fr': '&#xe90e;',
            'card': '&#xe90f;',
            'clean_bike': '&#xe910;',
            'clean_car': '&#xe911;',
            'clean_motorbike': '&#xe912;',
            'clock': '&#xe913;',
            'close': '&#xe914;',
            'cloud_v2': '&#xe915;',
            'computers': '&#xe916;',
            'config': '&#xe917;',
            'config_ok': '&#xe918;',
            'contract': '&#xe919;',
            'cop': '&#xe91a;',
            'cpu': '&#xe91b;',
            'credential': '&#xe91c;',
            'date': '&#xe91d;',
            'desk': '&#xe91e;',
            'digital_signature': '&#xe91f;',
            'dishwhasher': '&#xe920;',
            'down': '&#xe921;',
            'download_pdf': '&#xe922;',
            'edit': '&#xe923;',
            'false': '&#xe924;',
            'finished': '&#xe925;',
            'folder': '&#xe926;',
            'fridge': '&#xe927;',
            'help': '&#xe928;',
            'history': '&#xe929;',
            'joystick': '&#xe92a;',
            'left': '&#xe92b;',
            'login': '&#xe92c;',
            'logout': '&#xe92d;',
            'loundry_calefaction': '&#xe92e;',
            'mail': '&#xe92f;',
            'menu': '&#xe930;',
            'microwave': '&#xe931;',
            'money': '&#xe932;',
            'motorbike_b': '&#xe933;',
            'motorbike': '&#xe934;',
            'motorbike_cover': '&#xe935;',
            'motorbike_fl': '&#xe936;',
            'movements': '&#xe937;',
            'new_document': '&#xe938;',
            'night': '&#xe939;',
            'notebook': '&#xe93a;',
            'notification': '&#xe93b;',
            'oven': '&#xe93c;',
            'ovens': '&#xe93d;',
            'p2p_dfs': '&#xe93e;',
            'phone': '&#xe93f;',
            'photo': '&#xe940;',
            'photo_history': '&#xe941;',
            'photo_session': '&#xe946;',
            'place': '&#xe947;',
            'plate': '&#xe948;',
            'policy_qr': '&#xe949;',
            'printer': '&#xe94a;',
            'procedures': '&#xe94b;',
            'reload': '&#xe94c;',
            'reminder': '&#xe94d;',
            'report': '&#xe94e;',
            'resize': '&#xe94f;',
            'right': '&#xe950;',
            'rim': '&#xe951;',
            'search': '&#xe952;',
            'share': '&#xe953;',
            'shield': '&#xe954;',
            'speaker': '&#xe955;',
            'sun': '&#xe956;',
            'time': '&#xe957;',
            'top': '&#xe958;',
            'touch': '&#xe959;',
            'transfer': '&#xe95a;',
            'trash': '&#xe95b;',
            'true': '&#xe95c;',
            'tv': '&#xe95d;',
            'tv_video': '&#xe95e;',
            'upload': '&#xe95f;',
            'upload_v2': '&#xe960;',
            'user': '&#xe961;',
            'user_details': '&#xe962;',
            'users': '&#xe963;',
            'valid_place': '&#xe964;',
            'video': '&#xe965;',
            'view': '&#xe966;',
            'washing_machine': '&#xe968;',
            'wheel': '&#xe96a;',
            'white_appliance': '&#xe970;',
            'win': '&#xe971;',
            'wine_cellar': '&#xe967;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/ftl_icon/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
