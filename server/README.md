# Flask Application Setup with Virtual Environment

This guide provides instructions to set up a Python Flask application using a virtual environment.

---

## Prerequisites

- Ensure Python is installed on your system.
- Install `pip`, Python's package manager.

---

## Steps to Set Up the Project

### 1. Install `virtualenv`

To create an isolated Python environment, install `virtualenv`:

```bash
pip install virtualenv
 ```

### 2.Navigate to your project directory and create a virtual environment named 
venv:

```bash

virtualenv venv
```
### 3.Activate the Virtual Environment
Windows
Run the following command in your terminal:

```bash

venv\Scripts\activate
```
### 4.Install Flask
With the virtual environment activated, install Flask:

```bash
pip install Flask
```
### 5.Run the Flask application:

```bash

python app.py
```
### 6.Open your browser and navigate to:

http://127.0.0.1:5000