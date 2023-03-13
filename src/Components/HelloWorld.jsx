import styles from "./HelloWorld.module.css"

function HelloWorld() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p className={styles.frase}>testando o css com escopo</p>
    </div>
  );
}

export default HelloWorld;
