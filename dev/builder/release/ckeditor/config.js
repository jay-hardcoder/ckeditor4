/**
 * Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
    // config.uiColor = '#AADC6E';
    
    config.extraPlugins = "image2";


    config.extraAllowedContent = true;
    config.filebrowserUploadUrl=  '/api/fileApi/oss/policy?bizCode=SHARE_RESOURCE:FILE&client=WEB';
};

