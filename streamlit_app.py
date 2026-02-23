import streamlit as st
import streamlit.components.v1 as components

# Configuración de la página
st.set_page_config(page_title="HostPapa Support Tool", layout="wide")

# Leer el archivo HTML
with open("index.html", "r", encoding="utf-8") as f:
    html_content = f.read()

# Renderizar el HTML
# Nota: Streamlit corre en un iframe, por lo que las rutas JS deben ser correctas
components.html(html_content, height=1000, scrolling=True)
