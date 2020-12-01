import * as Yup from "yup";

const schema = Yup.object().shape({
  pesquisa: Yup.string()
    .required("Obrigatorio")
    .trim("Não é permitido apenas espaços em branco")
    .min(3, "No minimo três caracteres")
    .max(30, "No máximo trinta caracteres"),
});

export default schema;
