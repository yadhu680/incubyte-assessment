# String Calculator TDD

# Overview

This project is a simple implementation of the String Calculator using Test-Driven Development (TDD).

# Features

1. Perform calculations (addition) on numbers provided in a textbox.
2. Support for custom delimiters (commas, new lines, ; etc.).
3. Automatically detect and add based on the delimiter.
4. Handle negative numbers by throwing an exception listing all negative values.
5. Support for an unknown amount of numbers.
6. User friendly UI

# Requirements

1. JavaScript/TypeScript
2. HTML
3. CSS
4. TDD

# Setup

# 1.Clone the respository 

  git clone https://github.com/yadhu680/incubyte-assessment.git
  
  cd incubyte-assessment

  Open index.html file in browser

# TDD - Example Test Cases

1. Empty string: "" should return 0.
2. Single number: "1" should return 1.
3. Two numbers: "1,2" should return 3.
4. Multiple numbers: "1,2,3,4" should return 10.
5. New lines between numbers: "1\n2,3" should return 6.
6. Custom delimiter: "//;\n1;2" should return 3.
7. Negative numbers: "1,-2,3,-4" should throw an error with message "Negative numbers not allowed: -2, -4".

