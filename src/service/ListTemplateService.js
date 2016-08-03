/**
 *
 * Created by samuel on 16-7-23.
 *
 * This File aims to list all templates registered in build-future-template-manager
 *
 * @build-future.club
 *
 */


import Service from './Service.interface.js';

export default class ListTemplateService extends Service{

    service(){

    }

}

import  templates from './../../data/templates.json';

//var templates = require('./../../data/templates.json');

var templateStr = '['+templates.length + ' templates found ]\n';


var rowFormatter = function (index,item) {

    return '## '+ (index+1) + '.'+item.name + '\n';
};


templates.forEach(function (item, index) {
    templateStr += rowFormatter(index,item);
});
console.info(templateStr);

