System.register(["./use-component-legacy-ZbsrsM14.js","./_plugin-vue_export-helper-legacy-iRLPXgvE.js","./index-legacy-DAXMxUP0.js"],(function(e,t){"use strict";var r,o,n;return{setters:[e=>{r=e.u},e=>{o=e.u,n=e._},null],execute:function(){const t=VueDemi.defineComponent({props:{config:{type:Object,required:!0},iteratorIndex:Array,iteratorContainerId:Array,model:{type:Object,default:()=>({})}},setup(e){const{app:t}=o({config:e.config,iteratorContainerId:e.iteratorContainerId,iteratorIndex:e.iteratorIndex,methods:{}}),n=r({componentType:"container",app:t}),i=VueDemi.computed((()=>{let{iteratorData:r=[]}=e.config;const{itemConfig:o,dsField:n,items:i}=e.config;return Array.isArray(r)||(r=[]),"editor"!==t?.platform||r.length||r.push({}),r.map((e=>{const r="editor"===t?.platform||(t?.dataSourceManager?.compliedIteratorItemConds(e,o,n)??!0);return{items:t?.dataSourceManager?.compliedIteratorItems(e,i,n)??i,condResult:r,style:{position:"relative",left:0,top:0,...o.style}}}))}));return VueDemi.watch(i,(r=>{if(!e.config.id)return;const o=t?.getNode(e.config.id,e.iteratorContainerId,e.iteratorIndex);o&&(o.resetNodes(),r.forEach(((e,t)=>{o.setNodes(e.items,t)})))}),{immediate:!0}),{configs:i,containerComponent:n}}});e("default",n(t,[["render",function(e,t,r,o,n,i){return Vue.openBlock(),Vue.createElementBlock("div",null,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.configs,((t,r)=>(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(e.containerComponent),{"iterator-index":[...e.iteratorIndex||[],r],"iterator-container-id":[...e.iteratorContainerId||[],e.config.id],key:r,config:t},null,8,["iterator-index","iterator-container-id","config"])))),128))])}]]))}}}));
//# sourceMappingURL=IteratorContainer-legacy-C0ygUJbM.js.map