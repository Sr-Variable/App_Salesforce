import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";

// Reemplaza 'ruta_de_tu_logo.png' con la ruta correcta de la imagen del logo de Salesforce en tu proyecto.
import SalesforceLogo from "./Salesforce-logo.jpg";

const SalesforceInfo = () => {
  const handleContactClick = () => {
    Linking.openURL("./formulario.js");
  };

  const handleProductsClick = () => {
    // Reemplaza 'URL_DE_LA_PAGINA_DE_PRODUCTOS' con la URL correcta de tu página de productos y servicios.
    Linking.openURL("https://www.hubspot.es/our-story?hubs_content=www.hubspot.es%2F&hubs_content-cta=homepage-nav-about-desktop");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={SalesforceLogo} style={styles.logo} />
        <Text style={styles.title}>Salesforce - Información de la Empresa</Text>
      </View>
      <Text style={styles.text}>
        Salesforce es una empresa líder en tecnología con sede en San Francisco,
        California. Fue fundada en 1999 por Marc Benioff y otros cofundadores.
      </Text>
      <Text style={styles.text}>
        Ofrecen una amplia gama de productos y servicios, incluyendo Sales
        Cloud, Service Cloud, Marketing Cloud y muchas otras soluciones de
        gestión empresarial.
      </Text>
      <Text style={styles.text}>
        Salesforce es conocida por su compromiso con la igualdad y la
        diversidad, así como por su filantropía a través de la Fundación
        Salesforce.
      </Text>
      <Text style={styles.text}>
        La empresa ha tenido un impacto significativo en la industria
        tecnológica y se ha expandido a nivel global, atendiendo a empresas de
        todos los tamaños.
      </Text>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={handleProductsClick}>
          <Text style={styles.menuText}>Productos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleContactClick}>
          <Text style={styles.menuText}>Contacto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F8F8F8"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginRight: 16
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: "justify"
  },
  menu: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    marginHorizontal: 10
  },
  menuText: {
    color: "#fff",
    fontWeight: "bold"
  }
});

export default SalesforceInfo;
