import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

type Signo = 'Rata' | 'Buey' | 'Tigre' | 'Conejo' | 'Dragón' | 'Serpiente' | 'Caballo' | 'Cabra' | 'Mono' | 'Gallo' | 'Perro' | 'Cerdo';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent {
  formulario: FormGroup;
  edad: number | undefined;
  signoZodiacal: Signo | undefined;
  imagenUrl: string | undefined;

  signos: Record<Signo, number[]> = {
    'Rata': [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
    'Buey': [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
    'Tigre': [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
    'Conejo': [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
    'Dragón': [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
    'Serpiente': [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
    'Caballo': [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
    'Cabra': [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
    'Mono': [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
    'Gallo': [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
    'Perro': [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
    'Cerdo': [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031]
  };

  imagenes: Record<Signo, string> = {
    'Rata': 'https://www.clarin.com/img/westernastrology/rata.svg',
    'Buey': 'https://www.clarin.com/img/westernastrology/bufalo.svg',
    'Tigre': 'https://www.clarin.com/img/westernastrology/tigre.svg',
    'Conejo': 'https://www.clarin.com/img/westernastrology/conejo.svg',
    'Dragón': 'https://www.clarin.com/img/westernastrology/dragon.svg',
    'Serpiente': 'https://www.clarin.com/img/westernastrology/serpiente.svg',
    'Caballo': 'https://www.clarin.com/img/westernastrology/caballo.svg',
    'Cabra': 'https://www.clarin.com/img/westernastrology/cabra.svg',
    'Mono': 'https://www.clarin.com/img/westernastrology/mono.svg',
    'Gallo': 'https://www.clarin.com/img/westernastrology/gallo.svg',
    'Perro': 'https://www.clarin.com/img/westernastrology/perro.svg',
    'Cerdo': 'https://www.clarin.com/img/westernastrology/perro.svg'
  };

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: [''],
      apellido: [''],
      dia: [''],
      mes: [''],
      anio: [''],
      sexo: ['']
    });
  }

  calcularDatos() {
    const dia = this.formulario.value.dia;
    const mes = this.formulario.value.mes - 1; // Los meses en JavaScript son de 0 a 11
    const anio = this.formulario.value.anio;
    const fechaNacimiento = new Date(anio, mes, dia);
    const hoy = new Date();
    
    // Cálculo de edad correcto
    this.edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    if (hoy.getMonth() < mes || (hoy.getMonth() === mes && hoy.getDate() < dia)) {
      this.edad--;
    }

    const anioNacimiento = fechaNacimiento.getFullYear();
    this.signoZodiacal = this.getSigno(anioNacimiento);

    if (this.signoZodiacal) {
      this.imagenUrl = this.imagenes[this.signoZodiacal];
    } else {
      this.imagenUrl = undefined;
    }
  }

  getSigno(anioNacimiento: number): Signo | undefined {
    for (const signo in this.signos) {
      if (this.signos[signo as Signo].includes(anioNacimiento)) {
        return signo as Signo;
      }
    }
    return undefined;
  }
}
