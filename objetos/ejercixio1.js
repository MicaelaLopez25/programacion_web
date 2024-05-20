function createObject(name, subs) {
  const stremear = {
    name: name,
    subs: subs,
    hash: name.lenght * subs,
    getStatus: function () {
      return `mi nombre es ${name} y mis subs son ${subs}`;
    },
  };
  return stremear;
}
const newObjet = createObject("canela", 100);
console.log(newObjet.getStatus());
