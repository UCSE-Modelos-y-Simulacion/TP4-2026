# Cuestionario: Pruebas Estadísticas de Media, Varianza y Uniformidad

**Objetivo:** Evaluar la comprensión teórica sobre pruebas de bondad de ajuste según lo dictado en la Unidad 2 de Modelos y Simulación.

1. En la prueba estadística de medias para números pseudoaleatorios $U(0,1)$, ¿cuál es la hipótesis nula ($H_0$) que se plantea?
   - A) Que la varianza poblacional de los datos generados es estadísticamente equivalente a $1/12$, implicando que no existe sesgo en la amplitud de los datos observados frente al modelo teórico uniforme esperado en todos los casos posibles bajo análisis continuo.
   - B) Que el valor esperado de la serie de números pseudoaleatorios es estadísticamente igual a $0.5$.
   - C) Que la serie generada presenta un período máximo sin repeticiones antes de degenerar en un subciclo inestable.
   - D) Que la distribución de probabilidad es estrictamente Chi-Cuadrada con $n-1$ grados de libertad.
   - **Respuesta Correcta:** B

2. ¿Qué distribución de probabilidad teórica se utiliza como referencia para validar la varianza de un conjunto de números pseudoaleatorios uniformes?
   - A) Distribución Normal Estándar ($Z$).
   - B) Distribución T de Student con $N-1$ grados de libertad.
   - C) Distribución de Poisson con tasa de llegada $\lambda$.
   - D) Distribución Chi-Cuadrada ($\chi^2$) con $N-1$ grados de libertad.
   - **Respuesta Correcta:** D

3. En el test de bondad de ajuste Chi-Cuadrada para uniformidad, ¿cómo se calcula la frecuencia esperada ($E_i$) si se divide el rango (0,1) en $m$ subintervalos y se analizan $N$ números?
   - A) $E_i = N \cdot m^2$
   - B) $E_i = N / m$
   - C) Se debe calcular integrando la función de densidad de probabilidad observada, lo cual resulta en un cálculo computacionalmente intensivo que depende fuertemente de la semilla inicial generada por el método congruencial utilizado, afectando el sesgo del generador.
   - D) $E_i = m / N$
   - **Respuesta Correcta:** B

4. Al realizar la prueba de Kolmogorov-Smirnov (K-S), el estadístico de prueba $D$ se define como:
   - A) La diferencia máxima en valor absoluto entre la función de distribución empírica observada y la teórica acumulada, calculada ordenando previamente la muestra de menor a mayor.
   - B) La sumatoria de las diferencias cuadradas relativas de las frecuencias observadas y esperadas.
   - C) El logaritmo natural del producto de los números pseudoaleatorios generados.
   - D) La diferencia entre el límite superior de aceptación y la varianza muestral calculada iterativamente hasta alcanzar el nivel de convergencia requerido para validar el modelo estocástico de simulación discreta de sistemas.
   - **Respuesta Correcta:** A

5. En un contraste de hipótesis (por ejemplo, para probar la uniformidad), si el estadístico de prueba calculado es MAYOR que el valor crítico de la tabla estadística para un nivel de significancia $\alpha$, ¿qué decisión estadística se toma?
   - A) Se debe recalcular la muestra utilizando una variable antitética o técnica de reducción de varianza equivalente para poder tomar una decisión concluyente que minimice tanto el error Tipo I como el error Tipo II, validando así empíricamente el comportamiento del sistema simulado sin sacrificar recursos computacionales.
   - B) Se rechaza la hipótesis nula ($H_0$).
   - C) Se acepta la hipótesis nula ($H_0$).
   - D) Se concluye que los datos siguen una distribución estrictamente Exponencial Negativa.
   - **Respuesta Correcta:** B

6. Si el nivel de significancia $\alpha$ para una prueba de medias aumenta del 1% al 5%, ¿qué ocurre con el rango de aceptación en la campana de Gauss?
   - A) El rango de aceptación se reduce, volviendo la prueba más estricta.
   - B) El rango de aceptación se mantiene constante ya que $N$ no varía.
   - C) El rango de aceptación se desplaza asimétricamente hacia la cola derecha de la distribución teórica normal estándar, alterando significativamente el sesgo poblacional esperado para variables estocásticas discretas analizadas durante períodos transitorios iniciales.
   - D) El rango de aceptación se amplía, volviendo la prueba menos estricta.
   - **Respuesta Correcta:** A

7. En la prueba de varianza (Chi-Cuadrada), ¿cuál es el valor esperado de la varianza teórica bajo $H_0$ para una distribución Uniforme en el intervalo (0,1)?
   - A) $1/2$
   - B) $1/6$
   - C) $1/12$
   - D) Depende estrictamente de la cantidad de variables independientes generadas mediante el método de la transformada inversa, ya que la convergencia asintótica del teorema central del límite requiere un tamaño muestral significativamente grande para estabilizar las estimaciones relativas.
   - **Respuesta Correcta:** C

8. La prueba de uniformidad mediante Kolmogorov-Smirnov se recomienda especialmente cuando:
   - A) La varianza muestral de los datos recolectados es idéntica a la media poblacional, fenómeno típico observado al intentar ajustar variables discretas en modelos que representan filas de espera o llegadas aleatorias sin considerar factores estacionales exógenos al propio dominio del problema simulado.
   - B) El tamaño de la muestra $N$ es menor o igual a 50 datos.
   - C) El tamaño de la muestra $N$ supera los 10,000 datos, por su eficiencia computacional al evitar agrupamientos y divisiones.
   - D) Se sospecha autocorrelación entre los últimos 10 números de la secuencia generada.
   - **Respuesta Correcta:** B

9. Para calcular la frecuencia observada ($O_i$) en el test Chi-Cuadrada de uniformidad:
   - A) Se divide la muestra total por la cantidad de subintervalos y se suma 1.
   - B) Se cuenta cuántos números pseudoaleatorios de la muestra caen estrictamente dentro de cada uno de los $m$ subintervalos definidos para la partición.
   - C) Se calcula el área bajo la curva del histograma de frecuencias relativas acumuladas empleando aproximaciones trapezoidales o el método matemático de Monte Carlo de integración, garantizando una estimación precisa del estadístico de prueba.
   - D) Se resta la media muestral a cada valor y se eleva al cuadrado.
   - **Respuesta Correcta:** B

10. Si el estadístico calculado $Z_0$ en la prueba de medias resulta estar DENTRO de los límites $[-Z_{\alpha/2}, +Z_{\alpha/2}]$, se concluye que:
    - A) Se aprueba de forma irrefutable que el generador utilizado es el mejor posible.
    - B) No existe evidencia estadística suficiente para rechazar que el promedio de la muestra provenga de una distribución $U(0,1)$.
    - C) El ciclo de vida del generador multiplicativo congruencial ha finalizado, provocando una drástica disminución en el grado de aleatoriedad percibida durante los procesos estacionarios, lo cual invalida las observaciones recopiladas en sistemas de simulación dinámica continua.
    - D) Los datos analizados tienen, sin lugar a dudas, un error Tipo II asociado superior al 50%.
    - **Respuesta Correcta:** B

---

### Bloque Aiken (Para importar a Moodle)

```text
En la prueba estadística de medias para números pseudoaleatorios U(0,1), ¿cuál es la hipótesis nula (H0) que se plantea?
A) Que la varianza poblacional de los datos generados es estadísticamente equivalente a 1/12, implicando que no existe sesgo en la amplitud de los datos observados frente al modelo teórico uniforme esperado en todos los casos posibles bajo análisis continuo.
B) Que el valor esperado de la serie de números pseudoaleatorios es estadísticamente igual a 0.5.
C) Que la serie generada presenta un período máximo sin repeticiones antes de degenerar en un subciclo inestable.
D) Que la distribución de probabilidad es estrictamente Chi-Cuadrada con n-1 grados de libertad.
ANSWER: B

¿Qué distribución de probabilidad teórica se utiliza como referencia para validar la varianza de un conjunto de números pseudoaleatorios uniformes?
A) Distribución Normal Estándar (Z).
B) Distribución T de Student con N-1 grados de libertad.
C) Distribución de Poisson con tasa de llegada lambda.
D) Distribución Chi-Cuadrada con N-1 grados de libertad.
ANSWER: D

En el test de bondad de ajuste Chi-Cuadrada para uniformidad, ¿cómo se calcula la frecuencia esperada (Ei) si se divide el rango (0,1) en m subintervalos y se analizan N números?
A) Ei = N * m^2
B) Ei = N / m
C) Se debe calcular integrando la función de densidad de probabilidad observada, lo cual resulta en un cálculo computacionalmente intensivo que depende fuertemente de la semilla inicial generada por el método congruencial utilizado, afectando el sesgo del generador.
D) Ei = m / N
ANSWER: B

Al realizar la prueba de Kolmogorov-Smirnov (K-S), el estadístico de prueba D se define como:
A) La diferencia máxima en valor absoluto entre la función de distribución empírica observada y la teórica acumulada, calculada ordenando previamente la muestra de menor a mayor.
B) La sumatoria de las diferencias cuadradas relativas de las frecuencias observadas y esperadas.
C) El logaritmo natural del producto de los números pseudoaleatorios generados.
D) La diferencia entre el límite superior de aceptación y la varianza muestral calculada iterativamente hasta alcanzar el nivel de convergencia requerido para validar el modelo estocástico de simulación discreta de sistemas.
ANSWER: A

En un contraste de hipótesis, si el estadístico de prueba calculado es MAYOR que el valor crítico de la tabla estadística para un nivel de significancia alfa, ¿qué decisión estadística se toma?
A) Se debe recalcular la muestra utilizando una variable antitética o técnica de reducción de varianza equivalente para poder tomar una decisión concluyente que minimice tanto el error Tipo I como el error Tipo II, validando así empíricamente el comportamiento del sistema simulado sin sacrificar recursos computacionales.
B) Se rechaza la hipótesis nula (H0).
C) Se acepta la hipótesis nula (H0).
D) Se concluye que los datos siguen una distribución estrictamente Exponencial Negativa.
ANSWER: B

Si el nivel de significancia alfa para una prueba de medias aumenta del 1% al 5%, ¿qué ocurre con el rango de aceptación en la campana de Gauss?
A) El rango de aceptación se reduce, volviendo la prueba más estricta.
B) El rango de aceptación se mantiene constante ya que N no varía.
C) El rango de aceptación se desplaza asimétricamente hacia la cola derecha de la distribución teórica normal estándar, alterando significativamente el sesgo poblacional esperado para variables estocásticas discretas analizadas durante períodos transitorios iniciales.
D) El rango de aceptación se amplía, volviendo la prueba menos estricta.
ANSWER: A

En la prueba de varianza (Chi-Cuadrada), ¿cuál es el valor esperado de la varianza teórica bajo H0 para una distribución Uniforme en el intervalo (0,1)?
A) 1/2
B) 1/6
C) 1/12
D) Depende estrictamente de la cantidad de variables independientes generadas mediante el método de la transformada inversa, ya que la convergencia asintótica del teorema central del límite requiere un tamaño muestral significativamente grande para estabilizar las estimaciones relativas.
ANSWER: C

La prueba de uniformidad mediante Kolmogorov-Smirnov se recomienda especialmente cuando:
A) La varianza muestral de los datos recolectados es idéntica a la media poblacional, fenómeno típico observado al intentar ajustar variables discretas en modelos que representan filas de espera o llegadas aleatorias sin considerar factores estacionales exógenos al propio dominio del problema simulado.
B) El tamaño de la muestra N es menor o igual a 50 datos.
C) El tamaño de la muestra N supera los 10,000 datos, por su eficiencia computacional al evitar agrupamientos y divisiones.
D) Se sospecha autocorrelación entre los últimos 10 números de la secuencia generada.
ANSWER: B

Para calcular la frecuencia observada (Oi) en el test Chi-Cuadrada de uniformidad:
A) Se divide la muestra total por la cantidad de subintervalos y se suma 1.
B) Se cuenta cuántos números pseudoaleatorios de la muestra caen estrictamente dentro de cada uno de los m subintervalos definidos para la partición.
C) Se calcula el área bajo la curva del histograma de frecuencias relativas acumuladas empleando aproximaciones trapezoidales o el método matemático de Monte Carlo de integración, garantizando una estimación precisa del estadístico de prueba.
D) Se resta la media muestral a cada valor y se eleva al cuadrado.
ANSWER: B

Si el estadístico calculado Z0 en la prueba de medias resulta estar DENTRO de los límites, se concluye que:
A) Se aprueba de forma irrefutable que el generador utilizado es el mejor posible.
B) No existe evidencia estadística suficiente para rechazar que el promedio de la muestra provenga de una distribución U(0,1).
C) El ciclo de vida del generador multiplicativo congruencial ha finalizado, provocando una drástica disminución en el grado de aleatoriedad percibida durante los procesos estacionarios, lo cual invalida las observaciones recopiladas en sistemas de simulación dinámica continua.
D) Los datos analizados tienen, sin lugar a dudas, un error Tipo II asociado superior al 50%.
ANSWER: B
```
