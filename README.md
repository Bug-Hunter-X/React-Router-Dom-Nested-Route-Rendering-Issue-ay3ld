# React Router Dom Nested Route Rendering Issue

This repository demonstrates a common issue encountered when working with nested routes in React Router Dom v6.  The problem involves a nested route failing to render correctly within its parent route.  The solution illustrates a method to resolve this issue.

## Problem

The bug.js file contains a simple React application with nested routes.  Navigating to the nested route '/contact/:id' does not render the ContactDetail component as expected. The parent route's component ('/contact') might display improperly or not at all.

## Solution

The bugSolution.js file presents a corrected implementation. This involves careful examination of the route structure and ensuring the parent route's component handles the nested route's rendering in a compatible manner.