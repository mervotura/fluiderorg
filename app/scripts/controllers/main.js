'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('MainCtrl', function ($scope, $animate, $window) {
    $animate.enabled(false);
    $scope.slide = {
    	'interval': 5000,
    	'slides': [
    		{
    			'image': 'images/bg1.jpg',
    			'text': 'title',
    			'title': 'Kurikulum',
    			'description': 'Merupakan kumpulan pembelajaran aspek Multimedia secara terpadu.',
    			'faClass': 'icon-dice',
                'link': '#curriculum'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'Teknologi',
    			'description': 'Membahas teknologi yang dikembangkan, baik yang telah maupun yang akan menjadi material kurikulum berikutnya.',
    			'faClass': 'icon-cogs',
                'link': '#technology'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'Komunitas',
    			'description': 'Ayo bergabung dengan komunitas-komunitas pendukung Fluider untuk berkonsultasi dan berdiskusi mengenai semua konten Multimedia yang disediakan oleh Fluider.',
    			'faClass': 'icon-copy2',
                'link': '#forum'
    		}
    	]
    };

    $scope.slides = $scope.slide.slides;

    $scope.slide.labelStyle = {
    	'padding-top': $window.innerHeight/3
    };

    $scope.slide.getStyle = function(index) {
    	return {
    		'height': $window.innerHeight,
    		'background-image': 'url(' + $scope.slide.slides[index].image + ')',
    		'background-position': '50%',
            'background-size': 'cover'
    	};
    };
  });
