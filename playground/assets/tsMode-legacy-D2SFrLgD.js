System.register(["./index-legacy-3kcLgOY3.js"],(function(e,t){"use strict";var i,s;return{setters:[e=>{i=e.t,s=e.m}],execute:function(){e({flattenDiagnosticMessageText:d,getJavaScriptWorker:function(){return new Promise(((e,t)=>{if(!C)return t("JavaScript not registered!");e(C)}))},getTypeScriptWorker:function(){return new Promise(((e,t)=>{if(!D)return t("TypeScript not registered!");e(D)}))},setupJavaScript:function(e){C=O(e,"javascript")},setupTypeScript:function(e){D=O(e,"typescript")}});
/*!-----------------------------------------------------------------------------
       * Copyright (c) Microsoft Corporation. All rights reserved.
       * Version: 0.48.0(0037b13fb5d186fdf1e7df51a9416a2de2b8c670)
       * Released under the MIT license
       * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
       *-----------------------------------------------------------------------------*/
var t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,o={};((e,i,s,o)=>{if(i&&"object"==typeof i||"function"==typeof i)for(let l of n(i))a.call(e,l)||l===s||t(e,l,{get:()=>i[l],enumerable:!(o=r(i,l))||o.enumerable})})(o,s,"default");var l=e("WorkerManager",class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=o.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(o.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}}),c={};function d(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(const r of e.next)s+=d(r,t,i);return s}function u(e){return e?e.map((e=>e.text)).join(""):""}c["lib.d.ts"]=!0,c["lib.decorators.d.ts"]=!0,c["lib.decorators.legacy.d.ts"]=!0,c["lib.dom.d.ts"]=!0,c["lib.dom.iterable.d.ts"]=!0,c["lib.es2015.collection.d.ts"]=!0,c["lib.es2015.core.d.ts"]=!0,c["lib.es2015.d.ts"]=!0,c["lib.es2015.generator.d.ts"]=!0,c["lib.es2015.iterable.d.ts"]=!0,c["lib.es2015.promise.d.ts"]=!0,c["lib.es2015.proxy.d.ts"]=!0,c["lib.es2015.reflect.d.ts"]=!0,c["lib.es2015.symbol.d.ts"]=!0,c["lib.es2015.symbol.wellknown.d.ts"]=!0,c["lib.es2016.array.include.d.ts"]=!0,c["lib.es2016.d.ts"]=!0,c["lib.es2016.full.d.ts"]=!0,c["lib.es2017.d.ts"]=!0,c["lib.es2017.full.d.ts"]=!0,c["lib.es2017.intl.d.ts"]=!0,c["lib.es2017.object.d.ts"]=!0,c["lib.es2017.sharedmemory.d.ts"]=!0,c["lib.es2017.string.d.ts"]=!0,c["lib.es2017.typedarrays.d.ts"]=!0,c["lib.es2018.asyncgenerator.d.ts"]=!0,c["lib.es2018.asynciterable.d.ts"]=!0,c["lib.es2018.d.ts"]=!0,c["lib.es2018.full.d.ts"]=!0,c["lib.es2018.intl.d.ts"]=!0,c["lib.es2018.promise.d.ts"]=!0,c["lib.es2018.regexp.d.ts"]=!0,c["lib.es2019.array.d.ts"]=!0,c["lib.es2019.d.ts"]=!0,c["lib.es2019.full.d.ts"]=!0,c["lib.es2019.intl.d.ts"]=!0,c["lib.es2019.object.d.ts"]=!0,c["lib.es2019.string.d.ts"]=!0,c["lib.es2019.symbol.d.ts"]=!0,c["lib.es2020.bigint.d.ts"]=!0,c["lib.es2020.d.ts"]=!0,c["lib.es2020.date.d.ts"]=!0,c["lib.es2020.full.d.ts"]=!0,c["lib.es2020.intl.d.ts"]=!0,c["lib.es2020.number.d.ts"]=!0,c["lib.es2020.promise.d.ts"]=!0,c["lib.es2020.sharedmemory.d.ts"]=!0,c["lib.es2020.string.d.ts"]=!0,c["lib.es2020.symbol.wellknown.d.ts"]=!0,c["lib.es2021.d.ts"]=!0,c["lib.es2021.full.d.ts"]=!0,c["lib.es2021.intl.d.ts"]=!0,c["lib.es2021.promise.d.ts"]=!0,c["lib.es2021.string.d.ts"]=!0,c["lib.es2021.weakref.d.ts"]=!0,c["lib.es2022.array.d.ts"]=!0,c["lib.es2022.d.ts"]=!0,c["lib.es2022.error.d.ts"]=!0,c["lib.es2022.full.d.ts"]=!0,c["lib.es2022.intl.d.ts"]=!0,c["lib.es2022.object.d.ts"]=!0,c["lib.es2022.regexp.d.ts"]=!0,c["lib.es2022.sharedmemory.d.ts"]=!0,c["lib.es2022.string.d.ts"]=!0,c["lib.es2023.array.d.ts"]=!0,c["lib.es2023.d.ts"]=!0,c["lib.es2023.full.d.ts"]=!0,c["lib.es5.d.ts"]=!0,c["lib.es6.d.ts"]=!0,c["lib.esnext.d.ts"]=!0,c["lib.esnext.full.d.ts"]=!0,c["lib.esnext.intl.d.ts"]=!0,c["lib.scripthost.d.ts"]=!0,c["lib.webworker.d.ts"]=!0,c["lib.webworker.importscripts.d.ts"]=!0,c["lib.webworker.iterable.d.ts"]=!0;var g=e("Adapter",class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:r,column:n}=i,{lineNumber:a,column:o}=s;return{startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:o}}}),p=e("LibFiles",class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return!!e&&0===e.path.indexOf("/lib.")&&!!c[e.path.slice(1)]}getOrCreateModel(e){const t=o.Uri.parse(e),s=o.editor.getModel(t);if(s)return s;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return o.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const r=i.getExtraLibs()[e];return r?o.editor.createModel(r.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}}),m=e("DiagnosticsAdapter",class extends g{constructor(e,t,i,s){super(s),this._libFiles=e,this._defaults=t,this._selector=i,this._disposables=[],this._listener=Object.create(null);const r=e=>{if(e.getLanguageId()!==i)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let s;const r=e.onDidChangeContent((()=>{clearTimeout(s),s=window.setTimeout(t,500)})),n=e.onDidChangeAttached((()=>{const{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():o.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){r.dispose(),n.dispose(),clearTimeout(s)}},t()},n=e=>{o.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(o.editor.onDidCreateModel((e=>r(e)))),this._disposables.push(o.editor.onWillDisposeModel(n)),this._disposables.push(o.editor.onDidChangeModelLanguage((e=>{n(e.model),r(e.model)}))),this._disposables.push({dispose(){for(const e of o.editor.getModels())n(e)}});const a=()=>{for(const e of o.editor.getModels())n(e),r(e)};this._disposables.push(this._defaults.onDidChange(a)),this._disposables.push(this._defaults.onDidExtraLibsChange(a)),o.editor.getModels().forEach((e=>r(e)))}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:r,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),r||i.push(t.getSemanticDiagnostics(e.uri.toString())),n||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const a=await Promise.all(i);if(!a||e.isDisposed())return;const l=a.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),c=l.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?o.Uri.parse(e.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(c),e.isDisposed()||o.editor.setModelMarkers(e,this._selector,l.map((t=>this._convertDiagnostics(e,t))))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:r,column:n}=e.getPositionAt(i),{lineNumber:a,column:l}=e.getPositionAt(i+s),c=[];return t.reportsUnnecessary&&c.push(o.MarkerTag.Unnecessary),t.reportsDeprecated&&c.push(o.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:l,message:d(t.messageText,"\n"),code:t.code.toString(),tags:c,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach((t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;const r=t.start||0,n=t.length||1,{lineNumber:a,column:o}=s.getPositionAt(r),{lineNumber:l,column:c}=s.getPositionAt(r+n);i.push({resource:s.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:c,message:d(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return o.MarkerSeverity.Error;case 3:return o.MarkerSeverity.Info;case 0:return o.MarkerSeverity.Warning;case 2:return o.MarkerSeverity.Hint}return o.MarkerSeverity.Info}}),h=e("SuggestAdapter",class e extends g{get triggerCharacters(){return["."]}async provideCompletionItems(t,i,s,r){const n=t.getWordUntilPosition(i),a=new o.Range(i.lineNumber,n.startColumn,i.lineNumber,n.endColumn),l=t.uri,c=t.getOffsetAt(i),d=await this._worker(l);if(t.isDisposed())return;const u=await d.getCompletionsAtPosition(l.toString(),c);return u&&!t.isDisposed()?{suggestions:u.entries.map((s=>{let r=a;if(s.replacementSpan){const e=t.getPositionAt(s.replacementSpan.start),i=t.getPositionAt(s.replacementSpan.start+s.replacementSpan.length);r=new o.Range(e.lineNumber,e.column,i.lineNumber,i.column)}const n=[];return void 0!==s.kindModifiers&&-1!==s.kindModifiers.indexOf("deprecated")&&n.push(o.languages.CompletionItemTag.Deprecated),{uri:l,position:i,offset:c,range:r,label:s.name,insertText:s.name,sortText:s.sortText,kind:e.convertKind(s.kind),tags:n}}))}:void 0}async resolveCompletionItem(t,i){const s=t,r=s.uri,n=s.position,a=s.offset,o=await this._worker(r),l=await o.getCompletionEntryDetails(r.toString(),a,s.label);return l?{uri:r,position:n,label:l.name,kind:e.convertKind(l.kind),detail:u(l.displayParts),documentation:{value:e.createDocumentationString(l)}}:s}static convertKind(e){switch(e){case v.primitiveType:case v.keyword:return o.languages.CompletionItemKind.Keyword;case v.variable:case v.localVariable:return o.languages.CompletionItemKind.Variable;case v.memberVariable:case v.memberGetAccessor:case v.memberSetAccessor:return o.languages.CompletionItemKind.Field;case v.function:case v.memberFunction:case v.constructSignature:case v.callSignature:case v.indexSignature:return o.languages.CompletionItemKind.Function;case v.enum:return o.languages.CompletionItemKind.Enum;case v.module:return o.languages.CompletionItemKind.Module;case v.class:return o.languages.CompletionItemKind.Class;case v.interface:return o.languages.CompletionItemKind.Interface;case v.warning:return o.languages.CompletionItemKind.File}return o.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=u(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${b(i)}`;return t}});function b(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` — ${s.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var f=e("SignatureHelpAdapter",class e extends g{constructor(){super(...arguments),this.signatureHelpTriggerCharacters=["(",","]}static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case o.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case o.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case o.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(t,i,s,r){const n=t.uri,a=t.getOffsetAt(i),o=await this._worker(n);if(t.isDisposed())return;const l=await o.getSignatureHelpItems(n.toString(),a,{triggerReason:e._toSignatureHelpTriggerReason(r)});if(!l||t.isDisposed())return;const c={activeSignature:l.selectedItemIndex,activeParameter:l.argumentIndex,signatures:[]};return l.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:u(e.documentation)},t.label+=u(e.prefixDisplayParts),e.parameters.forEach(((i,s,r)=>{const n=u(i.displayParts),a={label:n,documentation:{value:u(i.documentation)}};t.label+=n,t.parameters.push(a),s<r.length-1&&(t.label+=u(e.separatorDisplayParts))})),t.label+=u(e.suffixDisplayParts),c.signatures.push(t)})),{value:c,dispose(){}}}}),_=e("QuickInfoAdapter",class extends g{async provideHover(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getQuickInfoAtPosition(s.toString(),r);if(!a||e.isDisposed())return;const o=u(a.documentation),l=a.tags?a.tags.map((e=>b(e))).join("  \n\n"):"",c=u(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+c+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}}}),y=e("DocumentHighlightAdapter",class extends g{async provideDocumentHighlights(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getDocumentHighlights(s.toString(),r,[s.toString()]);return a&&!e.isDisposed()?a.flatMap((t=>t.highlightSpans.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:"writtenReference"===t.kind?o.languages.DocumentHighlightKind.Write:o.languages.DocumentHighlightKind.Text}))))):void 0}}),w=e("DefinitionAdapter",class extends g{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getDefinitionAtPosition(s.toString(),r);if(!a||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(a.map((e=>o.Uri.parse(e.fileName)))),e.isDisposed())return;const l=[];for(let o of a){const e=this._libFiles.getOrCreateModel(o.fileName);e&&l.push({uri:e.uri,range:this._textSpanToRange(e,o.textSpan)})}return l}}),S=e("ReferenceAdapter",class extends g{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){const r=e.uri,n=e.getOffsetAt(t),a=await this._worker(r);if(e.isDisposed())return;const l=await a.getReferencesAtPosition(r.toString(),n);if(!l||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(l.map((e=>o.Uri.parse(e.fileName)))),e.isDisposed())return;const c=[];for(let o of l){const e=this._libFiles.getOrCreateModel(o.fileName);e&&c.push({uri:e.uri,range:this._textSpanToRange(e,o.textSpan)})}return c}}),x=e("OutlineAdapter",class extends g{async provideDocumentSymbols(e,t){const i=e.uri,s=await this._worker(i);if(e.isDisposed())return;const r=await s.getNavigationTree(i.toString());if(!r||e.isDisposed())return;const n=(t,i)=>({name:t.text,detail:"",kind:k[t.kind]||o.languages.SymbolKind.Variable,range:this._textSpanToRange(e,t.spans[0]),selectionRange:this._textSpanToRange(e,t.spans[0]),tags:[],children:t.childItems?.map((e=>n(e,t.text))),containerName:i});return r.childItems?r.childItems.map((e=>n(e))):[]}}),v=e("Kind",class{static#e=(()=>this.unknown="")();static#t=(()=>this.keyword="keyword")();static#i=(()=>this.script="script")();static#s=(()=>this.module="module")();static#r=(()=>this.class="class")();static#n=(()=>this.interface="interface")();static#a=(()=>this.type="type")();static#o=(()=>this.enum="enum")();static#l=(()=>this.variable="var")();static#c=(()=>this.localVariable="local var")();static#d=(()=>this.function="function")();static#u=(()=>this.localFunction="local function")();static#g=(()=>this.memberFunction="method")();static#p=(()=>this.memberGetAccessor="getter")();static#m=(()=>this.memberSetAccessor="setter")();static#h=(()=>this.memberVariable="property")();static#b=(()=>this.constructorImplementation="constructor")();static#f=(()=>this.callSignature="call")();static#_=(()=>this.indexSignature="index")();static#y=(()=>this.constructSignature="construct")();static#w=(()=>this.parameter="parameter")();static#S=(()=>this.typeParameter="type parameter")();static#x=(()=>this.primitiveType="primitive type")();static#v=(()=>this.label="label")();static#k=(()=>this.alias="alias")();static#C=(()=>this.const="const")();static#D=(()=>this.let="let")();static#A=(()=>this.warning="warning")()}),k=Object.create(null);k[v.module]=o.languages.SymbolKind.Module,k[v.class]=o.languages.SymbolKind.Class,k[v.enum]=o.languages.SymbolKind.Enum,k[v.interface]=o.languages.SymbolKind.Interface,k[v.memberFunction]=o.languages.SymbolKind.Method,k[v.memberVariable]=o.languages.SymbolKind.Property,k[v.memberGetAccessor]=o.languages.SymbolKind.Property,k[v.memberSetAccessor]=o.languages.SymbolKind.Property,k[v.variable]=o.languages.SymbolKind.Variable,k[v.const]=o.languages.SymbolKind.Variable,k[v.localVariable]=o.languages.SymbolKind.Variable,k[v.variable]=o.languages.SymbolKind.Variable,k[v.function]=o.languages.SymbolKind.Function,k[v.localFunction]=o.languages.SymbolKind.Function;var C,D,A=e("FormatHelper",class extends g{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}}),F=e("FormatAdapter",class extends A{constructor(){super(...arguments),this.canFormatMultipleRanges=!1}async provideDocumentRangeFormattingEdits(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getFormattingEditsForRange(r.toString(),n,a,A._convertOptions(i));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}}),I=e("FormatOnTypeAdapter",class extends A{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,s,r){const n=e.uri,a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getFormattingEditsAfterKeystroke(n.toString(),a,i,A._convertOptions(s));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}}),T=e("CodeActionAdaptor",class extends A{async provideCodeActions(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=A._convertOptions(e.getOptions()),l=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),c=await this._worker(r);if(e.isDisposed())return;const d=await c.getCodeFixesAtPosition(r.toString(),n,a,l,o);return!d||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:d.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t))),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const r of i.changes)for(const t of r.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,t.span),text:t.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}}),P=e("RenameAdapter",class extends g{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){const r=e.uri,n=r.toString(),a=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getRenameInfo(n,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");const c=await o.findRenameLocations(n,a,!1,!1,!1);if(!c||e.isDisposed())return;const d=[];for(const u of c){const e=this._libFiles.getOrCreateModel(u.fileName);if(!e)throw new Error(`Unknown file ${u.fileName}.`);d.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,u.textSpan),text:i}})}return{edits:d}}}),L=e("InlayHintsAdapter",class extends g{async provideInlayHints(e,t,i){const s=e.uri,r=s.toString(),n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(s);return e.isDisposed()?null:{hints:(await o.provideInlayHints(r,n,a)).map((t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)}))),dispose:()=>{}}}_convertHintKind(e){return"Parameter"===e?o.languages.InlayHintKind.Parameter:o.languages.InlayHintKind.Type}});function O(e,t){const i=[],s=new l(t,e),r=(...e)=>s.getLanguageServiceWorker(...e),n=new p(r);return function(){const{modeConfiguration:s}=e;!function(e){for(;e.length;)e.pop().dispose()}(i),s.completionItems&&i.push(o.languages.registerCompletionItemProvider(t,new h(r))),s.signatureHelp&&i.push(o.languages.registerSignatureHelpProvider(t,new f(r))),s.hovers&&i.push(o.languages.registerHoverProvider(t,new _(r))),s.documentHighlights&&i.push(o.languages.registerDocumentHighlightProvider(t,new y(r))),s.definitions&&i.push(o.languages.registerDefinitionProvider(t,new w(n,r))),s.references&&i.push(o.languages.registerReferenceProvider(t,new S(n,r))),s.documentSymbols&&i.push(o.languages.registerDocumentSymbolProvider(t,new x(r))),s.rename&&i.push(o.languages.registerRenameProvider(t,new P(n,r))),s.documentRangeFormattingEdits&&i.push(o.languages.registerDocumentRangeFormattingEditProvider(t,new F(r))),s.onTypeFormattingEdits&&i.push(o.languages.registerOnTypeFormattingEditProvider(t,new I(r))),s.codeActions&&i.push(o.languages.registerCodeActionProvider(t,new T(r))),s.inlayHints&&i.push(o.languages.registerInlayHintsProvider(t,new L(r))),s.diagnostics&&i.push(new m(n,e,t,r))}(),r}}}}));
//# sourceMappingURL=tsMode-legacy-D2SFrLgD.js.map
