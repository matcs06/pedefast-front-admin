import { useEffect, useState } from "react"
import Input from "../../../../../components/Input/Input"
import styles from "./CreateProduct.module.scss"
import Button from "../../../../../components/Button/Button"
import Options from "./Options"

import ImageUploading from 'react-images-uploading';
import instace from "../../../../../api/hello"
import Toast from "../../../../../components/Toast/Toast"


interface OptionsItems {
   name: string;
   id: string;
   value: string
}

interface CreatedOptionType {
   id: string,
   name: string,
   isRequired: boolean,
   maximumQuantity: string,
   items: OptionsItems[]
}

interface ProductType {
   name: string,
   description: string,
   price: string,
   quantity: string,
   image_url: string,
   enabled: boolean,
   options: CreatedOptionType[]
   createOrUpdate: "create" | "update"
   id: string;
   setShowEditProductModal?: any


}

interface Images {
   data_url: string,
   file: any,
}

interface IToastList {
   id: string;
   backgroundCollor: string;
   title: string;
   description: string;
}

interface IproductNames {
   name: string
}

type openedFromType = "new" | "existent"

export default function CreateProduct({ ...props }: ProductType) {
   /* Variable to assing default value when called by product create */
   let productNameDefaultValue = ""
   let productDescriptionDefaultValue = ""
   let productPriceDefaultValue = ""
   let productQuantityDefaultValue = ""
   let productImageDefaultValue = ""
   let productDefaultId = ""
   let producEnabledCurrent = true
   let productOptionsDefaultValue: CreatedOptionType[] = [];

   if (props.createOrUpdate === "update") {
      productNameDefaultValue = props.name
      productDescriptionDefaultValue = props.description
      productPriceDefaultValue = props.price
      productQuantityDefaultValue = props.quantity
      productImageDefaultValue = props.image_url
      productOptionsDefaultValue = props.options
      productDefaultId = props.id
      producEnabledCurrent = props.enabled

   }

   const [producListApi, setProductListApi] = useState<IproductNames[]>([])


   const [productName, setProductName] = useState(productNameDefaultValue)
   const [productDescription, setProductDescription] = useState(productDescriptionDefaultValue)
   const [productPrice, setProductPrice] = useState(productPriceDefaultValue)
   const [productStock, setProductStock] = useState(productQuantityDefaultValue)
   const [images, setImages] = useState<Images[]>([])
   const [productStatus, setProductStatus] = useState(producEnabledCurrent)


   const [showModal, setShowModal] = useState(false)
   const [openedFrom, setOpenedFrom] = useState<openedFromType>("new")


   const [toastList, setToastList] = useState<IToastList[]>([])

   const [options, setOptions] = useState<CreatedOptionType[]>(productOptionsDefaultValue) /* all created options */

   let username: any = ""
   let token: any = ""
   let user_id: any = ""
   if (typeof window !== 'undefined') {
      username = String(localStorage.getItem("username"))
      token = String(localStorage.getItem("token"))
      user_id = String(localStorage.getItem("user_id"))
   }

   const imagePrefixLinkDev = "http://localhost:3333/files/"
   const imagePrefixLink = "https://api.pedefast.com/files/"

   const productImageUrl = imagePrefixLink + username + "/" + productImageDefaultValue

   /* variables to store addtional values */
   //const [chosedOption, setChoosedOption] = useState<CreatedOptionType>();

   async function handleDeleteProduct() {

      try {
         await instace.delete("products", {
            params: { user_name: username, image_from: "product", id: productDefaultId }, headers: {
               Authorization: "Bearer " + token,
            },
         })

         const newToast: IToastList = {
            id: String(toastList.length + 1),
            backgroundCollor: "#5cb85c",
            title: "Sucesso",
            description: `Produto removido com sucesso`
         }

         setToastList([...toastList, newToast])
      } catch (error) {
         const newToast: IToastList = {
            id: String(toastList.length + 1),
            backgroundCollor: "#d9534f",
            title: "Erro",
            description: `Erro ao criar remover produto`
         }

         setToastList([...toastList, newToast])
      }

   }

   async function handleCreateUpdateProduct() {

      const formData = new FormData()

      const update_image = images[0] == null ? "no" : "yes"
      if (images[0] == null) {
         const imagesdata = {
            file: "fake",
            data_url: productImageUrl,
         }
         images[0] = imagesdata
      }

      if (props.createOrUpdate !== "update") {
         //Caso seja criacao de um produto
         try {

            if ((producListApi.filter((product) => product.name == productName).length) > 0) {
               throw new Error("Produto com o mesmo nome já existe")
            }

            formData.append("name", productName)
            formData.append("description", productDescription)
            formData.append("price", productPrice)
            formData.append("user_id", user_id)
            formData.append("options", "")
            formData.append("quantity", productStock)
            formData.append("update_image", update_image)
            formData.append("filename", images[0].file)

            await instace.post("/products", formData, {
               headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: "Bearer " + token,
               },
            });

            const newToast: IToastList = {
               id: String(toastList.length + 1),
               backgroundCollor: "#5cb85c",
               title: "Sucesso",
               description: `Produto ${productName} criado com sucesso`
            }

            setToastList([...toastList, newToast])

         } catch (error: any) {
            const newToast: IToastList = {
               id: String(toastList.length + 1),
               backgroundCollor: "#d9534f",
               title: "Erro",
               description: `Erro ao criar novo produto: ${error.message}`
            }

            setToastList([...toastList, newToast])

         }
      } else {
         // Caso seja atualizacao de um produto
         try {

            formData.append("name", productName)
            formData.append("description", productDescription)
            formData.append("price", productPrice)
            formData.append("quantity", productStock)
            formData.append("enabled", producEnabledCurrent ? "enabled" : "disabled")
            formData.append("image_from", "product")
            formData.append("product_id", productDefaultId)
            formData.append("username", username)
            formData.append("user_id", user_id)
            formData.append("options", JSON.stringify(options))
            formData.append("update_image", update_image)
            formData.append("filename", images[0].file)

            await instace.patch("/products/update", formData, {
               headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: "Bearer " + token,
               },
            });

            const newToast: IToastList = {
               id: String(toastList.length + 1),
               backgroundCollor: "#5cb85c",
               title: "Sucesso",
               description: `Produto ${productName} atualizado com sucesso`
            }

            setToastList([...toastList, newToast])


         } catch (error: any) {
            const newToast: IToastList = {
               id: String(toastList.length + 1),
               backgroundCollor: "#d9534f",
               title: "Erro",
               description: `Erro ao atualizar produto: ${error.message}`
            }

            setToastList([...toastList, newToast])

         }

      }
      //Reseting null in case it was previosly nulled but filled to go into the api
      if (images[0] !== null) {
         if (images[0].file == "fake") {
            images[0] == null
         }
      }


   }

   const onImageChange = (imageList: any, addUpdateIndex: any) => {
      // data for submit
      setImages(imageList);
   };

   const onClickStatus = async () => {

      try {
         await instace.patch("/products/stockupdate", {
            id: productDefaultId, quantity: productQuantityDefaultValue, enabled: !producEnabledCurrent
         }, {
            headers: {
               Authorization: "Bearer " + token,
            },
         })

         const productStatus = producEnabledCurrent == true ? "Desabilitado" : "Habilitado"
         setProductStatus(!producEnabledCurrent)

         const newToast: IToastList = {
            id: String(toastList.length + 1),
            backgroundCollor: "#5cb85c",
            title: "Sucesso",
            description: `Produto ${productStatus} com sucesso!`
         }

         setToastList([...toastList, newToast])

      } catch (error) {
         const newToast: IToastList = {
            id: String(toastList.length + 1),
            backgroundCollor: "#d9534f",
            title: "Erro",
            description: `Erro ao atualizar status do produto`
         }

         setToastList([...toastList, newToast])
      }

   }

   //FUNCAO QUE MOSTRA NOVA OPTION NA TELA DE CRIACAO (CHAMADA COMO PROPS NO COMPONENTE Options)
   //function handleNewOption(newOption: CreatedOptionType) {
   // setOptions([...options, newOption]) /* adding a new option from additional panel */
   //} 


   //FUNCAO QUE ATUALIZA UMA OPCAO EXISTENTE NA TELA DE CRIACAO (CHAMADA COMO PROPS NO COMPONENTE Options)
   /* function handleUpdateOption(updatedOption: CreatedOptionType) {
      const updatedOptions = options.map((option) => {
         if (option.id === updatedOption.id) {
            return updatedOption
         } else {
            return option
         }

      })

      setOptions(updatedOptions)
   } */

   //FUNCAO PARA ABRIR PARA CRIAR UMA NOVA OPTION
   /*  function addOption() {
       setOpenedFrom("new")
       setShowModal(!showModal)
    }
  */
   //FUNCAO QUE ABRE UMA OPTION EXISTENTE, PERMITINDO ATUALIZAR A OPTION
   /*  function onClickAdditionals(id: string) {
       //passando a opcao escolhida para o modal
       const optionsChosed = options.filter((option) => option.id === id)
 
       setChoosedOption(optionsChosed[0])
       setOpenedFrom("existent")
       setShowModal(true)
 
    } */

   //FUNCAO QUE DELETA UMA OPTION DA TELA DE PRODUTOS
   /* function handleDeleteOption(id: string) {
      const optionsAfterDeleted = options.filter((option) => option.id != id)

      setOptions(optionsAfterDeleted)
   }
 */

   useEffect(() => {
      async function loadProducts() {
         try {
            const response = await instace.get<IproductNames[]>(`products/?user_id=${user_id}`)
            setProductListApi(response.data)

         } catch (error) {
            const newToast: IToastList = {
               id: String(toastList.length + 1),
               backgroundCollor: "#d9534f",
               title: "Erro",
               description: `erro ao carregar produtos`
            }

            setToastList([...toastList, newToast])
         }
      }

      loadProducts()

   }, [])

   return (
      <>
         <div className={styles.mainContainer}>
            {props.createOrUpdate !== "update" ? (
               <div className={styles.headerContainer}>
                  <header>Adicione um novo produto</header>
               </div>
            ) : (
               <div className={styles.headerSpace}>
               </div>
            )}


            <form action="" className={styles.inputContainer}>
               <Input type="text" value={productName} autoComplete="off" setvalue={setProductName} name={"productName"} placeholder="Nome do Produto" />
               <Input type="text" value={productDescription} setvalue={setProductDescription} name={"Description"} placeholder="Descrição" />

               <div className={styles.priceAndStockContainer}>
                  <div>
                     <p>Preço:</p>
                     <Input type="number" value={productPrice} setvalue={setProductPrice} name={"price"} />
                  </div>

                  <div>
                     <p>Estoque: </p>
                     <Input type="number" value={productStock} setvalue={setProductStock} name={"stock"} />
                  </div>

               </div>
               {props.createOrUpdate == "update" && (
                  <div>
                     {productStatus ? (
                        <div onClick={onClickStatus} style={{ background: "#43c14b" }} className={styles.productStatusStyle}>
                           Produto Habilitado - clique para mudar
                        </div>
                     ) :
                        (
                           <div onClick={onClickStatus} style={{ background: "#cf3b1d", }} className={styles.productStatusStyle}>
                              Produto Desabilitado - Clique para mudar
                           </div>
                        )
                     }
                  </div>
               )}



            </form>

            <div className={styles.imageUploadContainer}>
               <ImageUploading
                  multiple={false}
                  value={images}
                  onChange={onImageChange}
                  dataURLKey="data_url"
               >
                  {({
                     imageList,
                     onImageUpload,
                     onImageUpdate,
                     onImageRemove,
                     isDragging,
                     dragProps,
                  }) => (
                     // write your building UI
                     <div className={styles.addImageContainer}>
                        {images.length == 0 && (
                           <button
                              style={isDragging ? { color: 'red' } : undefined}
                              onClick={onImageUpload}
                              {...dragProps}
                           >
                              {productImageDefaultValue ? "Atualizar imagem" : "Adicionar uma imagem"}
                           </button>
                        )}

                        &nbsp;

                        {images[0] == null &&
                           <div className={styles.imageItemContainer}>
                              {props.createOrUpdate == "update" && (
                                 <img src={productImageUrl} alt="" width={120} height={120} />

                              )}

                           </div>
                        }

                        {imageList.map((image, index) => (
                           <div key={index} className={styles.imageItemContainer}>
                              <img src={image['data_url']} alt="" width="100" />
                              <div className={styles.updateRemoveImageContainer}>
                                 <button onClick={() => onImageUpdate(index)}>Atualizar</button>
                                 <button onClick={() => onImageRemove(index)}>Remover</button>
                              </div>
                           </div>
                        ))}
                     </div>
                  )}
               </ImageUploading>
            </div>

            {/* <div className={styles.options}>
               <h4 onClick={addOption}>Opçoes e Adicionais</h4>
               <ul>
                  {options?.map((option) =>
                     <div key={option.id} className={styles.newItemsContainer}>
                        <li onClick={() => onClickAdditionals(option.id)}>{option.name}</li>
                        <MdCancel className={styles.deleteItem} color="#DC6A6A" size={30} cursor="pointer" onClick={() => handleDeleteOption(option.id)} />
                     </div>

                  )}
               </ul>
            </div> */}

            <div className={styles.buttonContainerparent}>
               <Button handleClick={handleCreateUpdateProduct}>{props.createOrUpdate === "update" ? "Atualizar produto" : "Criar Produto"}</Button>
               {props.createOrUpdate === "update" && (
                  <Button handleClick={handleDeleteProduct}>Remover</Button>

               )}

            </div>


         </div>
         {/* { showModal && (
            < Options createAdditional={handleNewOption}
               updateOption={handleUpdateOption}
               setShowModal={setShowModal}
               productName={productName}
               chosedOption={chosedOption}
               openedFrom={openedFrom}
            />
         )}  */}
         <Toast toastList={toastList} setToast={setToastList} />
      </>

   )
}