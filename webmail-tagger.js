// ==UserScript==
// @name         For Webmail
// @version      0.0.2
// @namespace    KyleForWebmail
// @include      https://mail.worksap.co.jp/webmail2/*
// @author       Kyle
// @description  This userscript is meant to be an example on how to use jQuery in a userscript on Google Chrome.
// ==/UserScript==

function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.$=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}
var main=function(){
    var $ = window.jQuery;
    //console.log('starting to make accessible tags');
    $('.folder-tag-wrapper').each(function(){
        $(this).find('a').append('<span class="operation-panel"><span class="select-operations operation-select-all"><i class="awesome-icon-plus-sign"></i></span><span class="select-operations operation-select-none"><i class="awesome-icon-minus-sign"></i></span><span class="select-operations operation-select-reverse"><i class="awesome-icon-circle"></i></span></span>');
        //console.log('making folder tag');
    });

    $(document).on('click', '.select-operations', function(e){
        e.preventDefault();
        e.stopPropagation();
        var tagId=$(this).parent().parent().attr('id');
        //console.log(tagId);
        var tagList = $('.list-tag[tag-id="'+tagId+'"]');
        var operation = 2;
        if($(this).hasClass("operation-select-all")) operation = 1;
        if($(this).hasClass("operation-select-none")) operation = 0;

        tagList.each(function(){
            //console.log(this);
            var mail = $(this).parents(".list-mail");
            var icon = mail.find(".mail-list-checkbox-column > i");
            var status = icon.hasClass("awesome-icon-check-empty")? 0:1;
            var result = operation - status;
            //console.log(result);
            if(result !== 0){
                icon.parent('.mail-list-checkbox-column').click();
            }
        });
    });
    $(document).on('click', 'div.list-tag', function(e){
        e.preventDefault();
        e.stopPropagation();
        var tagId = $(this).attr('tag-id');
        //console.log(tagId);
        var tagList = $('.list-tag[tag-id="'+tagId+'"]');
        var operation = 1;

        tagList.each(function(){
            //console.log(this);
            var mail = $(this).parents(".list-mail");
            var icon = mail.find(".mail-list-checkbox-column > i");
            var status = icon.hasClass("awesome-icon-check-empty")? 0:1;
            var result = operation - status;
            //console.log(result);
            if(result !== 0){
                icon.parent('.mail-list-checkbox-column').click();
            }
        });
    });
    $(document).on('click', 'div.list-tag', function(e){
        e.preventDefault();
        e.stopPropagation();
        var tagId = $(this).attr('tag-id');
        //console.log(tagId);
        var tagList = $('.list-tag[tag-id="'+tagId+'"]');
        var operation = 1;

        tagList.each(function(){
            //console.log(this);
            var mail = $(this).parents(".list-mail");
            var icon = mail.find(".mail-list-checkbox-column > i");
            var status = icon.hasClass("awesome-icon-check-empty")? 0:1;
            var result = operation - status;
            //console.log(result);
            if(result !== 0){
                icon.parent('.mail-list-checkbox-column').click();
            }
        });
    });
    $(document).on('click', '#load-more', function(e){
        if(!$('#load-more')[0].parentElement.parentElement.classList.contains('ng-hide')){
            setTimeout(function(){$('#load-more')[0].click();}, 2000);
        } else {
            console.log('all loaded');
        }
    });

    clearInterval(window.blinkingTimer);
};
setTimeout(function(){addJQuery(main);}, 10000);
