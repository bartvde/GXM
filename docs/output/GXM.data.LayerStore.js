Ext.data.JsonP.GXM_data_LayerStore({"parentMixins":[],"html_meta":{},"aliases":{},"inheritdoc":null,"superclasses":["Ext.data.Store"],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><strong>GXM.data.LayerStore</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GXM.data.LayerModel' rel='GXM.data.LayerModel' class='docClass'>GXM.data.LayerModel</a></div><h4>Files</h4><div class='dependency'><a href='source/LayerStore.html#GXM-data-LayerStore' target='_blank'>LayerStore.js</a></div></pre><div class='doc-contents'><p>api: constructor\n .. class:: LayerStore(config)</p>\n\n<pre><code> The class that is used to construct a GXM LayerStore.\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-model' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.data.LayerStore'>GXM.data.LayerStore</span><br/><a href='source/LayerStore.html#GXM-data-LayerStore-property-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.data.LayerStore-property-model' class='name expandable'>model</a><span> : String</span></div><div class='description'><div class='short'>api: config[model]\n\n String The identifier for the model to be used. ...</div><div class='long'><p>api: config[model]</p>\n\n<p> <code>String</code> The identifier for the model to be used.\n Defaults to <code>gxm_layer</code>.</p>\n<p>Defaults to: <code>&quot;GXM.data.LayerModel&quot;</code></p></div></div></div><div id='property-proxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.data.LayerStore'>GXM.data.LayerStore</span><br/><a href='source/LayerStore.html#GXM-data-LayerStore-property-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.data.LayerStore-property-proxy' class='name expandable'>proxy</a><span> : Object</span></div><div class='description'><div class='short'>api: config[proxy]\n\n String/Ext.data.Proxy/Object The proxy to be used by the store. ...</div><div class='long'><p>api: config[proxy]</p>\n\n<p> <code>String/Ext.data.Proxy/Object</code> The proxy to be used by the store.\n Defaults to a configuration object for a <code>Ext.data.MemoryProxy &lt;http://docs.sencha.com/touch/2-0/#!/api/Ext.data.proxy.Memory&gt;</code><em>\n that has a <code>Ext.data.reader.Json &lt;http://docs.sencha.com/touch/2-0/#!/api/Ext.data.reader.Json&gt;</code></em> set as <code>reader</code>-property.</p>\n<p>Defaults to: <code>{type: &quot;memory&quot;, reader: {type: &quot;json&quot;, root: &quot;&quot;}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getLayerByIndex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GXM.data.LayerStore'>GXM.data.LayerStore</span><br/><a href='source/LayerStore.html#GXM-data-LayerStore-method-getLayerByIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GXM.data.LayerStore-method-getLayerByIndex' class='name expandable'>getLayerByIndex</a>( <span class='pre'>Object idx</span> )</div><div class='description'><div class='short'>api: method[getLayerByIndex]\n :param idx: Integer The index of the record having the layer to return. ...</div><div class='long'><p>api: method[getLayerByIndex]\n :param idx: <code>Integer</code> The index of the record having the layer to return.\n :return:  <code>OpenLayers.Layer</code> The layer object the record at the given index contains.</p>\n\n<p> Returns the layer object of the record at the given index.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>idx</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","files":[{"href":"LayerStore.html#GXM-data-LayerStore","filename":"LayerStore.js"}],"extends":"Ext.data.Store","uses":[],"members":{"css_mixin":[],"method":[{"tagname":"method","owner":"GXM.data.LayerStore","name":"getLayerByIndex","id":"method-getLayerByIndex","meta":{}}],"cfg":[],"property":[{"tagname":"property","owner":"GXM.data.LayerStore","name":"model","id":"property-model","meta":{}},{"tagname":"property","owner":"GXM.data.LayerStore","name":"proxy","id":"property-proxy","meta":{}}],"css_var":[],"event":[]},"alternateClassNames":[],"tagname":"class","singleton":false,"statics":{"method":[],"css_mixin":[],"cfg":[],"property":[],"event":[],"css_var":[]},"component":false,"mixins":[],"code_type":"ext_define","inheritable":false,"name":"GXM.data.LayerStore","mixedInto":[],"subclasses":[],"meta":{},"id":"class-GXM.data.LayerStore","requires":["GXM.data.LayerModel"]});