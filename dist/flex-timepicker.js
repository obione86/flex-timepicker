(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, "/*\n" +
"To customize the look and feel of Ionic, you can override the variables\n" +
"in ionic's _variables.scss file.\n" +
"For example, you might change some of the default colors:\n" +
"*/\n" +
"\n" +
".ionic_timepicker_popup .font_28px {\n" +
"    font-size: 28px;\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .margin_zero {\n" +
"    margin: 0;\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .padding_zero {\n" +
"    padding: 0;\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .popup {\n" +
"    background-color: #ffffff;\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .popup-head {\n" +
"    display: none;\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .popup-body {\n" +
"    padding: 0;\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .popup-buttons {\n" +
"    padding: 0;\n" +
"    min-height: 44px;\n" +
"    height: 44px;\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .popup-buttons .button:not(:last-child) {\n" +
"    margin-right: 1px;\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .padding_left_15px {\n" +
"    padding-left: 15px;\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .heading {\n" +
"    height: 44px;\n" +
"    background-color: #009688;\n" +
"    color: #ffffff;\n" +
"    text-align: center;\n" +
"    line-height: 44px;\n" +
"    font-size: 18px;\n" +
"    font-weight: bold;\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .col-15 {\n" +
"    -webkit-box-flex: 0;\n" +
"    -webkit-flex: 0 0 15%;\n" +
"    -moz-box-flex: 0;\n" +
"    -moz-flex: 0 0 15%;\n" +
"    -ms-flex: 0 0 15%;\n" +
"    flex: 0 0 15%;\n" +
"    max-width: 15%;\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .time_picker_colon {\n" +
"    padding-top: 45px;\n" +
"    text-align: center;\n" +
"    font-weight: bold;\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .time_picker_arrows {\n" +
"    width: 100%;\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .time_picker_box_text {\n" +
"    height: 68px;\n" +
"    text-align: center;\n" +
"    border: 1px solid #ddd;\n" +
"    font-size: 26px;\n" +
"    line-height: 65px;\n" +
"    border-radius: 50%\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .overflowShow {\n" +
"    white-space: normal !important;\n" +
"}\n" +
"\n" +
".ionic_timepicker_popup .button_set,\n" +
".ionic_timepicker_popup .button_close {\n" +
"    background-color: #009688;\n" +
"    color: #ffffff;\n" +
"}"));
