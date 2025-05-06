const _language = new WeakMap();

class Programmer {
  constructor(name, language) {
    this.name = name;
    _language.set(this, language);
  }

  // Getter
  get language() {
    return _language.get(this);
  }

  set language(newLanguage) {
    if (!newLanguage) throw new Error("Language cannot be empty.");
    _language.set(this, newLanguage);
  }
}

const programmer = new Programmer("John", "JavaScript");
console.log(programmer.language);
programmer.language = "Python";
console.log(programmer.language);
