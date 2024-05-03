import { useFormik } from "formik";
import useProfile from "../../hooks/useProfile";
import { ToastContainer } from "react-toastify";

const Profile = () => {
  const { updateProfile, validationSchema, user } = useProfile();

  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      last_name: user?.last_name || "",
      dni: user?.dni || "",
      phone_number: user?.phone_number || "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await updateProfile(values);
    },
    enableReinitialize: true,
  });

  return (
    <div className="flex flex-col items-center px-10 py-10 gap-10">
      <h1 className="text-4xl font-bold">Perfil</h1>
      <div className="w-full flex justify-around gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl">Tus pedidos</h2>

          <div>
            <h2 className="text-4xl">Todavía no tienes pedidos</h2>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl">Editar perfil</h2>
          <form
            className="flex flex-col gap-4"
            action=""
            onSubmit={formik.handleSubmit}
          >
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                {/* name */}
                <label className="input input-bordered flex items-center gap-2 w-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    name="name"
                    placeholder="Nombre"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    defaultValue={formik.values.name}
                  />
                </label>
                <span className="text-red-500 text-xs">
                  {formik.touched.name ? formik.errors.name : null}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {/* last_name */}
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    name="last_name"
                    placeholder="Apellido"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    defaultValue={formik.values.last_name}
                  />
                </label>
                <span className="text-red-500 text-xs">
                  {formik.touched.last_name ? formik.errors.last_name : null}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                {/* email */}
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow input-disabled"
                    placeholder="Correo electrónico"
                    defaultValue={user?.email}
                    disabled
                  />
                </label>
                <span></span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                {/* dni */}
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    name="dni"
                    placeholder="Numero de Documento"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    defaultValue={formik.values.dni}
                  />
                </label>
                <span className="text-red-500 text-xs">
                  {formik.touched.dni ? formik.errors.dni : null}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {/* phone_number */}
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    name="phone_number"
                    placeholder="Número de telefono"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    defaultValue={formik.values.phone_number}
                  />
                </label>
                <span className="text-red-500 text-xs">
                  {formik.touched.phone_number
                    ? formik.errors.phone_number
                    : null}
                </span>
              </div>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                type="password"
                className="grow"
                name="password"
                placeholder="Confirmar contraseña"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <span className="text-red-500 text-xs">
              {formik.touched.password ? formik.errors.password : null}
            </span>
            <button className="btn btn-primary no-animation" type="submit">
              Actualizar
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;