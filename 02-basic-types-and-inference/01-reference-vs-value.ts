let a: { name: string } | null = { name: "Nik" };
const b = a;
a = null;
console.log(b);
console.log(a);

const config = { theme: "dark" };
config.theme = "light";
console.log(config);

config = { theme: "light" };
//TS2588: Cannot assign to 'config' because it is a constant.

// После a = null, a которое лежит в stack перестало ссылаться на объект который живет в heap
// config.theme = "light" разрешено потому что содержимое (свойство) объекта менять можно, а config = {...} — нет, потому что const запрещает переписывать саму ссылку на объект в памяти.
