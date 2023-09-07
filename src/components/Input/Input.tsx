import styles from "./Input.module.scss";

export default function Input({ ...props }) {

   const handleSet = (event: any) => {
      event?.preventDefault()
      props?.setvalue(event?.target.value)
   }

   if (props.setvalue == undefined || props.setvalue == null) {
      props.setvalue = ""
   }

   return (
      <div className={styles.inputContainer}>
         <input className={styles.input} placeholder={props.placeholder} onChange={handleSet} type={props.type} name={props.name}  {...props} />
      </div>
   )

}