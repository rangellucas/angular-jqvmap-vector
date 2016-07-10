/*
	Angular JQVMap is based in JQVMap
	
	* jQVMap Version 1.0
	*
	* http://jqvmap.com
	*
	* Copyright 2012, Peter Schmalfeldt <manifestinteractive@gmail.com>
	* Copyright 2011-2012, Kirill Lebedev
	* Licensed under the MIT license.
	*
	* Fork Me @ https://github.com/manifestinteractive/jqvmap
	
	Author: Lucas Rangel

*/
var ngMap = angular.module("ngJqvmap",[]);
ngMap.directive("vmap", function($compile, $timeout){

	return {
		restrict: "AE",
		scope: {
			vmapMap: "@",
			vmapBackground: "@",
			vmapColor: "@",
			vmapHoverColor: "@",
			vmapSelectedColor: "@",
			vmapScaleColors: "@",
			vmapNormalizeFunction: "@",
			vmapEnableZoom: "@",
			vmapShowTooltip: "@",
			vmapBorderColor: "@",
			vmapBorderWidth: "@",
			vmapBorderOpacity: "@",
			vmapSelectedRegions: "=",
			vmapMultiSelectRegion: "@",
			vmapColors: "=",
			vmapNameRegion: "=",
			vmapIdRegion: "=",
		},
		link: function(scope, elem, attr){

			jQuery(elem).vectorMap({
           		
				map: scope.vmapMap,
				backgroundColor: scope.vmapBackground,
				color: scope.vmapColor,
				hoverColor: scope.vmapHoverColor,
				selectedColor: scope.vmapSelectedColor,
				scaleColors: scope.vmapScaleColors,
				normalizeFunction: scope.vmapNormalizeFunction,
				enableZoom: scope.vmapEnableZoom,
				showTooltip: scope.vmapShowTooltip,
				borderColor: scope.vmapBorderColor, 
				borderWidth: scope.vmapBorderWidth,
				borderOpacity: scope.vmapBorderOpacity,
				selectedRegions: scope.vmapSelectedRegions,
				multiSelectRegion: scope.vmapMultiSelectRegion,
				colors: scope.vmapColors,
				onRegionOut: function(event, code, region){
					//console.log(event);
	    		},
	    		onRegionClick: function(event, code, region){
	    			scope.vmapNameRegion = region;
	    			scope.vmapIdRegion = code;
	    			scope.$apply();	
				}

   	 		});
		}

		
	}
});