(function(i,s){typeof exports=="object"&&typeof module<"u"?s(exports):typeof define=="function"&&define.amd?define(["exports"],s):(i=typeof globalThis<"u"?globalThis:i||self,s(i.pelilauta_store={}))})(this,function(i){"use strict";class s{constructor(t){this.key="",t&&(this.key=t)}get colletionName(){throw new Error("A Storable object must have a collectionName")}get firestorePath(){throw new Error("A Storable object has to provide a firestorePath")}toJSON(){return{key:this.key}}}class n extends s{constructor(t){super(t),this.createdAt=void 0,this.updatedAt=void 0,this.flowtime=-1,this.owners=[]}static fromFirestore(t,r){const e=new n(r);return!e.key&&t.key&&(e.key=t.key),e.createdAt=t.createdAt&&typeof t.createdAt=="number"?t.createdAt:void 0,e.updatedAt=t.updatedAt&&typeof t.updatedAt=="number"?t.updatedAt:void 0,e.flowtime=t.flowtime&&typeof t.flowtime=="number"?t.flowtime:-1,t.owners&&typeof t.owners=="string"?e.owners=[t.owners]:t.owners&&Array.isArray(t.owners)?e.owners=t.owners:e.owners=[],e}toJSON(){const t=super.toJSON();return this.createdAt&&(t.createdAt=this.createdAt),this.updatedAt&&(t.updatedAt=this.updatedAt),this.flowtime&&(t.flowtime=this.flowtime),t}}class l extends n{constructor(t){super(t),this.tags=[],this.title="",this.markdownContent="",this.htmlContent="",this.public=!0}toJSON(){const t=super.toJSON();return this.tags&&(t.tags=this.tags),this.title?t.title=this.title:t.title="",this.markdownContent?t.markdownContent=this.markdownContent:t.markdownContent="",this.htmlContent&&(t.htmlContent=this.htmlContent),typeof this.public=="boolean"?t.public=this.public:t.public=!0,t}static migrateFromV1(t){return t.name&&!t.title&&(t.title=t.name),t}static fromFirestore(t,r){const e=l.migrateFromV1(t),o=n.fromFirestore(e,r);return!e.tags||!Array.isArray(e.tags)?o.tags=[]:o.tags=e.tags,!e.title||typeof e.title!="string"?o.title="":o.title=e.title,!e.markdownContent||typeof e.markdownContent!="string"?o.markdownContent="":o.markdownContent=e.markdownContent,!e.htmlContent||typeof e.htmlContent!="string"?o.htmlContent="":o.htmlContent=e.htmlContent,typeof e.public!="boolean"?o.public=!0:o.public=e.public,o}}class f extends l{constructor(t){super(t),this.releaseDate=void 0,this.blogKey=""}get colletionName(){return"blogPosts"}get firestorePath(){return[this.colletionName,this.key]}toJSON(){const t=super.toJSON();return this.releaseDate&&(t.releaseDate=this.releaseDate),this.blogKey&&(t.origin=this.blogKey),t}static fromFirestore(t,r){const e=l.fromFirestore(t,r);return t.releaseDate&&(e.releaseDate=t.releaseDate),t.origin&&(e.blogKey=t.blogKey),e}}i.BlogPost=f,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
