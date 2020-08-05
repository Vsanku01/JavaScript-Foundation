function quadratic(a, b, c) {
  // program to solve quadratic equation
  let root1, root2;

  let discriminant = b * b - 4 * a * c;

  // condition for real and different roots
  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(root1.toFixed(2));
    console.log(root2.toFixed(2));
  }

  // condition for real and equal roots
  else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(root1.toFixed(2));
    console.log(root2.toFixed(2));
  }

  // if roots are not real
  else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(realPart + imagPart);
    console.log(realPart - imagPart);
  }
}

quadratic(1, 5, 6);
