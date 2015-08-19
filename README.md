#XML render
###Modulo de Drupal 7 para exportar carpetas de contendios en formato XML


*Hasta el momento este modulo esta preparado para propositos especificos y no un uso general.*

---

######Proposito
Integrar contenido generado en la plataforma drupal con software de maquetación digital (inDesign), a traves renders del nodo en formato XML.

######Uso
*to do: explicar uso del modulo en drupal*

######integracion con inDesign 
[VID: ejemplo marcos tags y contenidos](https://www.youtube.com/watch?v=aiNvk_PTEFU&list=UU4_MR0dYcWBfqB9lN4fVj9g)

[URL: Using XML to automate production of digital publications](http://www.adobe.com/devnet/digitalpublishingsuite/articles/using-xml-to-automate-production-of-digital-publications.html)

[URL: InDesign Help / Tagging content for XML](http://helpx.adobe.com/indesign/using/tagging-content-xml.html)

[PDF: Using XML in Adobe InDesign](http://xml.coverpages.org/Adobe-UsingXMLwithInDesign.pdf)

[PDF: XML & InDesign by Cari Jansen](http://www.indesignusergroup.com/chapters/brisbane/files/643/Brisbane_Handout.pdf)

[URL: Adobe InDesign and XML: Building an XML Run-in template 1](http://carijansen.com/2011/02/24/xml-indesign-part-1/)

[PDF: Adobe InDesign and XML: Building an XML Run-in template 2](http://carijansen.com/2011/02/25/indesign-xml-part-2/)

[PDF: Adobe InDesign CS3 and XML: A Technical Reference](http://wwwimages.adobe.com/content/dam/Adobe/en/products/indesign/pdfs/indesign_and_xml_technical_reference.pdf)


######.DTD
*to do: agregar DTD (document type definition)*

######Content Type Schema
Este modulo depende que exista un tipo de contenido "Carpeta" con la siguiente estructura:
```
[title](de facto)

[field_autor] (field collection - única instancia) 
	[field_autor_nombre] (campo individual - única instancia) TEXTO CORTO
	[field_autor_foto] (campo individual  - única instancia) IMAGEN 
	[field_autor_biografia] (campo individual - única instancia) TEXTO 

[field_introduccion] (campo individual  - única instancia) TEXTO
[field_problematica_del_campo] (campo individual - única instancia) TEXTO
[field_reflexiones] (c.i. - u.i.) TEXTO
[field_objetivos_del_curso] (campo individual - única instancia) TEXTO
[field_mapa_conceptual] (campo individual  - única instancia) IMAGEN

[field_unidad] (field collection - múltiples instancias) 
	[field_unidad_titulo] (campo individual - única instancia) TEXTO CORTO
	[field_unidad_objetivos] (campo individual - única instancia) TEXTO
	[field_unidad_introduccion] (campo individual  - única instancia) TEXTO
	[field_apartado] (field collection - múltiples instancias) 
		[field_apartado_titulo] (campo individual - única instancia) TEXTO CORTO
		[field_bloque] (field collection - múltiples instancias) 
				[field_bloque_tipo] (campo individual - única instancia) TAX 
				[field_bloque_contenido] (campo individual - única instancia) TEXTO
		[field_subapartado] (field collection - múltiples instancias) 
			[field_subapartado_titulo] (campo individual - única instancia)T.C.
			[field_bloque] (field collection - múltiples instancias) 
				[field_bloque_tipo] (campo individual - única instancia) TAX 
				[field_bloque_contenido] (campo individual - única instancia) TEXTO
	[field_unidad_bibliografia] (campo individual - única instancia) TEXTO


```
*Terminos en la taxonomia: field_bloque_tipo: 
Texto Genérico, Actividad, Cita, Leer con atención, Pastillas, Ejemplo, Para Ampliar, Para reflexionar, Texto aparte, Lectura obligatoria, Lectura recomendada, Audio, Audiovisual, Imagen y Web.*
######Dependecias
```
entity, field_collection y  field_collection_fieldset.
```


---
######Creditos
por Lisandro Fernández  
para **Dirección de Materiales Didácticos** (bdeangelis@unq.edu.ar, aelbert@unq.edu.ar.)

Secretaría de Educación Virtual / Universidad Nacional de Quilmes   

*noviembre 2013*  
