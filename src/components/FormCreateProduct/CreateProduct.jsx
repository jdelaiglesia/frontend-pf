import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { axios } from "../../helpers/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// VERCEL LA CONCHA DE TU MADRE
const CreateProduct = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Ingrese un nombre"),
    stock: Yup.number().required("Ingrese un número de stock"),
    price: Yup.number().required("Ingrese un precio"),
    url_image: Yup.mixed().required("Ingrese una imagen"),
    available: Yup.boolean().required("Seleccione una disponibilidad"),
    category: Yup.string().required("Seleccione una categoría"),
    description: Yup.string().required("Agrega una descripción"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      stock: "",
      available: "",
      price: "",
      url_image: null,
      category: "",
      description: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      createProduct(values);
    },
  });

  useEffect(() => {
    axios("/categories").then(({ data }) => setCategories(data));
  }, []);

  return (
    <div className="w-96">
      <form className="flex flex-col my-10 p-10" onSubmit={formik.handleSubmit}>
        <h2 className="text-4xl font-bold text-center mb-6">
          Publicar producto
        </h2>
        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
            className="input input-bordered w-full max-w-xs"
            placeholder="Nombre del producto"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.name ? formik.errors.name : null}
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <textarea
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            name="description"
            className="textarea textarea-bordered"
            placeholder="Descripción del producto"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.description ? formik.errors.description : null}
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.stock}
            name="stock"
            className="input input-bordered w-full max-w-xs"
            placeholder="Número de stock"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.stock ? formik.errors.stock : null}
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <select
            className="select select-bordered text-base w-full max-w-xs"
            name="available"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.available}
          >
            <option>Disponibilidad</option>
            <option value="true">Disponible</option>
            <option value="false">No disponible</option>
          </select>

          <span className="text-red-500 text-xs">
            {formik.touched.available ? formik.errors.available : null}
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            name="price"
            className="input input-bordered w-full max-w-xs"
            placeholder="Precio"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.price ? formik.errors.price : null}
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <input
            type="file"
            onChange={(event) => {
              formik.setFieldValue("url_image", event.currentTarget.files[0]);
            }}
            onBlur={formik.handleBlur}
            name="url_image"
            className="file-input file-input-bordered w-full max-w-xs"
            placeholder="URL de la imágen"
          />

          <span className="text-red-500 text-xs">
            {formik.touched.url_image ? formik.errors.url_image : null}
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <select
            className="select select-bordered text-base w-full max-w-xs"
            name="category"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.category}
          >
            <option>Categoría</option>
            {categories.map((category) => (
              <option value={category._id}>{category.name}</option>
            ))}
          </select>

          <span className="text-red-500 text-xs">
            {formik.touched.category ? formik.errors.category : null}
          </span>
        </div>
        <button className="btn btn-primary" type="submit">
          Publicar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateProduct;
