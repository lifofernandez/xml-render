/* xml_render.js
 * impletenes save a .zip with node content
 * 2014-08-29
 *
 * By Lisandro Fernandez
 * 
 */

var carpeta_titulo;
var carpeta_xml;
var carpeta_imgs;

Drupal.behaviors.xml_render = {

	attach : function(){
		console.log('generando archivo: DMD-'+Drupal.settings.xml_render.nodeTitle+'.zip ...');
		
		
		carpeta_titulo = Drupal.settings.xml_render.nodeTitle;
		carpeta_xml = Drupal.settings.xml_render.nodeRenderXml;
		content_imgs = Drupal.settings.xml_render.nodeImgs;


		var zip = new JSZip();
		zip.file(carpeta_titulo+'.xml', carpeta_xml);
		var imagesFolder = zip.folder("images");

		content_imgs.forEach(function(imgURL) {
			var filename = imgURL.replace(/^.*[\\\/]/, '');

			var ext = filename.split('.').pop();

			console.log('Geting: '+filename+' ['+ext.toUpperCase()+']...');
			var imgData = getBase64Image(imgURL,ext); 
			imagesFolder.file(filename, imgData, {base64: true});  
		});

		//console.log(imgData);

		var content = zip.generate({type:"blob"});
		// see FileSaver.js
		saveAs(content, 'DMD-'+carpeta_titulo+'.zip');   

		console.log('done.');  


		function getBase64Image(url,ext) {
			// Create an empty canvas element

			var img = new Image();
			img.crossOrigin = '';
			img.src = url;


			var canvas = document.createElement("canvas");
			canvas.width = img.width;
			canvas.height = img.height;

			// Copy the image contents to the canvas
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img, 0, 0);

			// Get the data-URL formatted image
			// Firefox supports PNG and JPEG. You could check img.src to
			// guess the original format, but be aware the using "image/jpg"
			// will re-encode the image.

			var mimeTipo = 'image/jpeg';

			switch(ext) {
				case 'png':
					mimeTipo ='image/png';
				break;
				
				case 'gif':
					mimeTipo ='image/png';
				break;
				
				case 'bmp':
					mimeTipo ='image/png';
				break;
				
				case 'tiff':
					mimeTipo ='image/png';
				break;
				
				case 'webp':
					mimeTipo ='image/webp';
				break;
			
				case 'svg':
					mimeTipo ='image/png';
				break;

				case 'xxx':
					mimeTipo ='image/png';
				break;

				case 'ico':
					mimeTipo ='image/png';
				break;
				
				default:
					mimeTipo = 'image/jpeg';
			}


			var dataURL = canvas.toDataURL(mimeTipo);
			//console.log(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));

			//alert(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));

			return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
		}
		
		
		


		


	}

}




	