/**
 * @fileoverview Provide zz.ui.mdl.navigation base object.
 * @license Apache-2.0
 * @author http://imazzine.com/idl/zz.ui.mdl.navigation/ (Popkov Alexander)
 */

goog.provide( 'zz.ui.mdl.navigation' );

goog.require( 'zz.ui.mdl.navigation.tpl' );
goog.require( 'zz.ui.mdl.Navigation' );

/**
 * Base namespace for zz.ui.mdl.navigation module.
 * @const
 */
zz.ui.mdl.navigation = zz.ui.mdl.navigation || { };

/**
 * Bootstrap module method.
 */
zz.ui.mdl.navigation.bootstrap = function( ){

	//

    soy.renderElement( goog.dom.getElement( 'root' ), zz.ui.mdl.navigation.tpl.fixedHeadersAndTabs );

	var layout = new zz.ui.mdl.Navigation( );
		layout.decorate( goog.dom.getElementByClass( goog.getCssName( 'mdl-js-layout' ) ) );
};
goog.exportSymbol( 'zz.ui.mdl.navigation.bootstrap', zz.ui.mdl.navigation.bootstrap );