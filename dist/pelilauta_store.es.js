class l {
  constructor(t) {
    this.key = "", t && (this.key = t);
  }
  get colletionName() {
    throw new Error("A Storable object must have a collectionName");
  }
  get firestorePath() {
    throw new Error("A Storable object has to provide a firestorePath");
  }
  /**
   * Returns the class in a firestore friendly JSON format
   */
  toJSON() {
    return {
      key: this.key
      // Note: this duplicates the key to 
    };
  }
}
class r extends l {
  constructor(t) {
    super(t), this.createdAt = void 0, this.updatedAt = void 0, this.flowtime = -1, this.owners = [];
  }
  /**
   * A Factory method to create an Entry from a DocumentData object
   * 
   * @param {DocumentData} data The DocumentData object to create the Entry from
   * @param {string} key The key of the Entry
   */
  static fromFirestore(t, s) {
    const e = new r(s);
    return !e.key && t.key && (e.key = t.key), e.createdAt = t.createdAt && typeof t.createdAt == "number" ? t.createdAt : void 0, e.updatedAt = t.updatedAt && typeof t.updatedAt == "number" ? t.updatedAt : void 0, e.flowtime = t.flowtime && typeof t.flowtime == "number" ? t.flowtime : -1, t.owners && typeof t.owners == "string" ? e.owners = [t.owners] : t.owners && Array.isArray(t.owners) ? e.owners = t.owners : e.owners = [], e;
  }
  /**
   * Returns the class in a firestore friendly JSON format
   */
  toJSON() {
    const t = super.toJSON();
    return this.createdAt && (t.createdAt = this.createdAt), this.updatedAt && (t.updatedAt = this.updatedAt), this.flowtime && (t.flowtime = this.flowtime), t;
  }
}
class i extends r {
  constructor(t) {
    super(t), this.tags = [], this.title = "", this.markdownContent = "", this.htmlContent = "", this.public = !0;
  }
  toJSON() {
    const t = super.toJSON();
    return this.tags && (t.tags = this.tags), this.title ? t.title = this.title : t.title = "", this.markdownContent ? t.markdownContent = this.markdownContent : t.markdownContent = "", this.htmlContent && (t.htmlContent = this.htmlContent), typeof this.public == "boolean" ? t.public = this.public : t.public = !0, t;
  }
  static migrateFromV1(t) {
    return t.name && !t.title && (t.title = t.name), t;
  }
  /**
   * A Factory method to create an Entry from a DocumentData object
   * 
   * @param {DocumentData} data The DocumentData object to create the Entry from
   * @param {string} key The key of the Entry
   */
  static fromFirestore(t, s) {
    const e = i.migrateFromV1(t), o = r.fromFirestore(e, s);
    return !e.tags || !Array.isArray(e.tags) ? o.tags = [] : o.tags = e.tags, !e.title || typeof e.title != "string" ? o.title = "" : o.title = e.title, !e.markdownContent || typeof e.markdownContent != "string" ? o.markdownContent = "" : o.markdownContent = e.markdownContent, !e.htmlContent || typeof e.htmlContent != "string" ? o.htmlContent = "" : o.htmlContent = e.htmlContent, typeof e.public != "boolean" ? o.public = !0 : o.public = e.public, o;
  }
}
class h extends i {
  constructor(t) {
    super(t), this.releaseDate = void 0, this.blogKey = "";
  }
  toJSON() {
    const t = super.toJSON();
    return this.releaseDate && (t.releaseDate = this.releaseDate), this.blogKey && (t.origin = this.blogKey), t;
  }
  /**
   * A Factory method to create an Entry from a DocumentData object
   * 
   * @param {DocumentData} data The DocumentData object to create the Entry from
   * @param {string} key The key of the Entry
   */
  static fromFirestore(t, s) {
    const e = i.fromFirestore(t, s);
    return t.releaseDate && (e.releaseDate = t.releaseDate), t.origin && (e.blogKey = t.blogKey), e;
  }
}
export {
  h as BlogPost
};
