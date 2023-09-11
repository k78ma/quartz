---
title: C Book
tags: []
date: 2023-09-10
---
# Part I  Syntax and coding

This part contains the basics of the basics in C programming syntax.  We shall end this part by introducing coding styles, _i.e._ how you should write the code in order not to drive your readers insane.  Most contents, except the last chapter are fully re-written. 
This part is designed in a way, such that people who learnt the basics of C++ can skip all contents, but the last chapter. 

# Chapter 1 C Syntax

## 1. Hello World


This chapter is a crash introduction to C.  With the assumption that readers have some knowledge in some programming language(s), the chapter will teach readers to write valid C programs as fast as possible.  Readers should bear in mind that this chapter is the start, not the end, as many things we shall write in this chapter does not make sense, unless you have knowledges about compilation, linking, computer memory etc.  The latter parts of the book shall introduce the contents. 

```c
/* main.c: generate some simple output */
#include <stdio.h>

int main(void) {
	printf("Hello, world.\n");
	return 0;
}
```

Save this file to `main.c`, then compile and execute: 
```bash
$ gcc main.c
$ ./a.out
Hello, world.
```

`gcc` is the default compiler in many \*nix platform, e.g. Linux, and it is available on others (e.g. MacOS).  After compilation, the generated executable file is named `a.out` by default, and you may use `./a.out` to execute the file.  If you don't want the output file to be `a.out`, you may specify a name using the `-o` option: 
```bash
$ gcc main.c -o main
```

Now let's go through the source file line-by-line: 
The first line is a comment specifying the usage of the source file. 
The compiler will ignore all comments, so technically you can say whatever you want in the comments, or remove them at all without causing any complaints from the compiler, but that would not be a good practice.  Comments are for human-being to read, so it should serve the purpose to help other programmers (likely including you after several month).  Here, we have the first golden rule of programming in this book: 

> Write good comments. 

Line 5 is an expression statement.  Such kind of statement is the core "building block" of C programs.  They always ends with a semicolon (`;`). 

C is a block-based language, you may use a pair of curly brackets (braces) to group multiple statements together into a block (referred as a composite statement in the standard).  In most case, a block can take the place of a single statement and vice versa, but there is a exception in function definition -- it only accepts a block. 

The `main` function is the default starting point of all C programs.  `int main (void) { ...; return 0; }` is the standard way of defining it.  We specify the type of the return value as `int`, and we return a `0` using the `return 0;` statement, which will tell the shell (bash in my case) the program terminates normally.  The `void` here means our function does not accept any parameter, if you leave the parenthesis as empty, like `int main ()`, the program will still compile, but instead of stating you don't accept any parameter, you are not specifying what parameter(s) the function accepts.  This is  a huge difference from some programming languages.

The C compilers are very strict with grammars, and the error messages are usually very concise, which terrify new learners very often.  However, most of the time, the error messages are still very readable if you overcome your fear.  As an example, let's say you made a spelling mistake, instead of `<stdio.h>`, you wrote `<studio.h>`.  You would get a compilation error: 
```
main.c:1:10: fatal error: studio.h: No such file or directory
    1 | #include <studio.h>
      |          ^~~~~~~~~~
compilation terminated.
```
The first part `main.c` is where the problem happened, and the two following numbers are the line and column number of the error.  The error message says "studio.h: No such file or directory", which means the compiler cannot find a header file called `studio.h`.  Ideally, a programmer would realize he/she made a mistake in the name, and should have spelt it as `stdio.h` instead. 

Sometimes, the compiler's prompt is not an "error" but a "warning". For example, if you change `printf("Hello, world.\n");` in the above example to `printf(0);`, the compiler will give a warning:
```bash
$ gcc main.c
main.c: In function ‘main’:
main.c:4:16: warning: passing argument 1 of ‘printf’ makes pointer from integer without a cast [-Wint-conversion]
    4 |         printf(1);
      |                ^
      |                |
      |                int
In file included from main.c:1:
/usr/include/stdio.h:356:43: note: expected ‘const char * restrict’ but argument is of type ‘int’
  356 | extern int printf (const char *__restrict __format, ...);
      |                    ~~~~~~~~~~~~~~~~~~~~~~~^~~~~~~~
$ ./a.out
Segmentation fault (core dumped)
```

This warning message means that the types do not match, but the compiler still reluctantly gave it a pass.  Warning messages are not fatal errors, and the compilation can still continue. If there are only warning messages but no error messages in the entire compilation process, an executable file can still be generated. However, warning messages should not be ignored. If a warning message is issued, it means that your program is not written in a standard or suggested way and may have bugs. Although it can compile and generate executable files, the results of the program are often incorrect. For example, the above program ran into a segmentation fault, which is a runtime error.

The severity of various warning messages is different. Warnings like the one above almost certainly indicate that there are bugs in the program, while other warnings only indicate that the program is not written in a standard way and can generally run correctly. `gcc` usually ignore some "unimportant" warning messages, but these messages may still be helpful to spot out some bugs; for example, let's change the `printf` line to `printf(0);`: 
```bash
$ gcc main.c
$ ./a.out
```
Nothing happened...  but this is not what we  are expecting, the program should have printed something.  However, if we turn on the `-Wall` option during the compilation time, we will receive a warning: 
```bash
$ gcc main.c -Wall
main.c: In function ‘main’:
main.c:4:9: warning: argument 1 null where non-null expected [-Wnonnull]
    4 |         printf(0);
      |         ^~~~~~
...
```

If the 0 in `printf` was accidentally written by you (for example, you made a mistake when using the search and replace function of an editor), this warning can help you find the error. Although the command line of this book usually omits the `-Wall` option to highlight the key points, it is strongly recommended that you add the `-Wall` option every time you write a compilation command. 

## 2. Comments

There are two types of comments in C: one in the form of `/* comment */`, the other is like `// comment`.  The first one may be used anywhere in a source file, and can occupy multiple lines.  The other one may only be used at the end of each line, and it will make compiler ignore everything starting from the double-slash.  One important note about block-style comments is that you may not nest comments, for example: 
```c
/* 
 * comment body 1
 * /* comment body 2 */
 */
```

The compiler will assume you comment end at `body 2 */` and will give an error message because it cannot understand the next `*/`. 

## 3. String literals

(skipped as the readers are assumed to be familiar with at least one programming language)

TODO: summarize, esp about escape sequence. 


## 4. Constants and variables

Constants are the most basic elements in a program.  In C there are character constants, integer constants, floating point constants, and enumeration constants.  Enumeration constants will be introduced in [Section 3 "Data Type Tags"](ch07s03.html#struct.datatag). Let's look at an example:

```c
printf("character: %c\ninteger: %d\nfloating point: %f\n", '}', 34, 3.14);
```

Character constants are enclosed in single quotes, such as the above `'}'`.  Note that single quotes can only enclose one character and cannot enclose a string of characters like double quotes.  Character constants can also be an escape sequence, such as `'\n'`. Although the single quote encloses two characters, it actually represents only one character. There is a slight difference from using escape sequences in string literals. If you want to represent double quotes `"` and question mark `?` in character constants, you can use the escape sequence `\"` and `\?`, or you can directly use the characters `"` and `?`. However, to represent `'` and `\`, you must use the escape sequence. 

The internal representation of integers and decimals in computers is different (will be detailed in [Chapter 14 "Representation of Numbers in Computers"](ch14.html#number)), so they are two different types in C language, such as the above `34` and `3.14`. Decimals are called floating point numbers in computer terms. The output of this statement is not the same as Hello World. The string `"character: %c\ninteger: %d\nfloating point: %f\n"` is not printed as it is, but is output like this:
```c
character: }
integer: 34
floating point: 3.14
```

The first string in `printf` is called a format string. 
The `%c`, `%d`, and `%f` in the format string are placeholders, which consist of a percentage mark `%` and a conversion specifications. When `printf` is executed, it will replace these placeholders with the corresponding parameters after the comma. `%c` is replaced by a character, `%d` is replaced by an integer, and `%f` is replaced by a floating point number.

The `printf` function can also output a string. For example, the output of the following statement is also `Hello, world!`
```c
printf("%s\n", "Hello, world!");
```

Sometimes, it's easy to confuse different types of data, such as `"5"`, `'5'`, and `5`. If you pay attention to their delimiters, it will be clear. The first one is a string literal, the second one is a character, and the third one is an integer. After reading the following sections of this chapter, you will understand why it is necessary to strictly distinguish between them. 

If you plan to use a constant in multiple places of the program, and it is either obscure and you don't want to type it multiple times or you plan to change it later, you may be a `#define` to define a constant.  At this stage, you should almost always put the `#define` statement at the beginning of your source file: 
```c
#define THE_ANSWER 34
#include <stdio.h>

int main(void) {
	printf("character: %c\ninteger: %d\nfloating point: %f\n", '}', THE_ANSWER, 3.14);
	return 0;
}
```

This program will print the same content as before.  If you (or you boss, actually) decide to change the answer later, you can simply change the first line to `#define THE_ANSWER 42`. 
This way of defining a symbol constant is formally known as defining a _macro_.  It is worth noting that most constant macro should be written in upper case (the reason will be clear later). 



### Exercises

1. Summarize the rules of the escape sequences introduced earlier. Think about how to represent a % character in the format string of `printf`? Write a small program to test it.


## 5. Variables

Variables are another one of the most important concepts in a programming language. A variable is a named location in computer memory where a value can be stored. The stored value can change at any time. For example, you might store the character `'a'` at one time and the character `'b'` at another. It is because the value of a variable can change that it is called a "variable".

Just as constants have different types, variables also have different types. The type of a variable determines the size of the storage space it occupies. For example, the following four statements define four variables: `fred`, `bob`, `jimmy`, and `tom`. Their types are character, integer, and floating-point, respectively:
```c
char fred;
int bob;
float jimmy;
double tom;
```

There are three types of floating point numbers: `float` is a single-precision floating point, `double` is a double-precision floating point, and `long double` is a potentially higher-precision floating point. Their differences and conversion rules will be detailed in Chapter 15, Data Types.  In the following a few chapters, we will only use the `double` type. The constant `3.14` introduced in the previous section is indeed a `double` typed constant, and the `%f` in `printf` is a double type conversion specifier.

The size and accuracy of each type is defined by the compiler, and can vary from platform to platform, we shall discuss the details in later chapters.  Curious readers may seek [the table given in Wikibooks](https://en.wikibooks.org/wiki/C_Programming/Language_Reference#Table_of_data_types).

Let's reconsider the above variable definitions, it does not make sense why Fred is a character or Bob is an integer.  Here, we have the second golden rule in this book: 

> Do not name your variable using a children name book. 

Ideally, variable names should be self-explanatory, for example: 
```c
char firstletter;
char lastletter;
int hour, minute;
```

Not only can we infer what will be stored in the variables, but we can also make reasonable guess about the valid data range: 'A'~'Z' or 'a'~'z' for the two characters, and 0~23, 0~59 for `hour` and `minite`, respectively.  From this example, we can also see that two variables of the same type (hour and minute) can be declared together.

There are certain restrictions on naming variables. C language stipulates that it must start with a letter or underscore `_`, followed by several letters, numbers, underscores, but no other characters. For example, these are legal variable names: `Abc`, `__abc__`, `_123`. But these are illegal variable names: `3abc`, `ab$`. In fact, this rule applies not only to variable names, but also to all syntax elements that can be named by programmers, such as function names, macro definitions, structure member names, etc., which are collectively referred to as _identifiers_ in C language.

In addition, some words representing types such as `char`, `int`, `float`, `double`, etc., 
cannot be used as identifiers, although they comply with the above rules. 
In C language, some words have special meanings and are not allowed to be used as identifiers. These words are called _keywords_ or reserved words. Text editors commonly used for programming will highlight these keywords, so as long as you are careful, you usually won't misuse them as identifiers. The keywords in C99 are:
```c
auto     break  case   char     const    continue default  do
double   else   enum   extern   float    for      goto     if
inline   int    long   register restrict return   short    signed
sizeof   static struct switch   typedef  union    unsigned void
volatile while  _Bool  _Complex _Imaginary
```

There are some keywords added in C11 and C23: 
```c
alignas       (C23) alignof       (C23) bool           (C23)
constexpr     (C23) false         (C23) nullptr        (C23)
static_assert (C23) thread_local  (C23) true           (C23)
typeof        (C23) typeof_unqual (C23) _Alignas       (C11)
_Alignof      (C11) _Atomic       (C11) _BitInt        (C23)
_Decimal128   (C23) _Decimal32    (C23) _Decimal64     (C23)
_Generic      (C11) _Noreturn     (C11) _Static_assert (C11)
_Thread_local (C11)
```

Note that some new keywords added in C23 do not have proper highlight in some editors. 

One more thing to note is that, in general, you should avoid using identifiers that start with an underscore. Identifiers that start with an underscore are legal as long as they do not conflict with C language keywords, but they are often used by compilers for some feature extensions. The C standard library also defines many identifiers that start with an underscore, so unless you are very clear about the compiler and the C standard library, you should generally avoid using such identifiers to avoid naming conflicts.

In most cases, we need to put a value inside the variables we defined.  This process is called _assignment_, for example: 
```c
char firstletter;
int hour, minute;
firstletter = 'a';   /* give firstletter the value 'a' */
hour = 11;           /* assign the value 11 to hour */
minute = 59;         /* set minute to 59 */
```
You may also assign a value to a variable when defining it using an _initializer_:
```c
char firstletter = 'a';
int hour = 11, minute = 59;
```
The procedure is called _initialization_ [Note A].

Now, we can print the values in `hour` and `minute`: 
```c
printf("Current time is %d:%d", hour, minute);
```


- [Note A]:  We colloquially refer the process of giving a value to a variable the first time as "initialization", but C has set a clear boundary between using assignment statements and using initializer, and subsequently assigns different terms for them. 

### Side note: declaration and definition 

In C language, there are three types of declarations: variable declarations, function declarations, and type declarations. If a declaration of a variable or function requires the compiler to allocate storage space for it, it can also be called a definition. Therefore, a definition is a type of declaration. In the example code of the following a few chapters, all variable declarations allocate storage space, so they are all definitions. When we get to Chapter 20 Section 2, "Definitions and Declarations", we will see which variable declarations do not allocate storage space and therefore are not definitions.

In the next chapter, we will see that function definitions and declarations are distinguished in the same way. A function declaration that allocates storage space can be called a function definition. Starting from Chapter 7, "Structures", we will see type declarations. Declaring a type does not allocate storage space, but it seems that "type definition" also sounds good, so in this book, "type definition" and "type declaration" mean the same thing.

Declarations are similar to statements, they also end with a semicolon. But there is a difference in syntax between declarations and statements. Statements can only appear within `{}` brackets, while declarations can appear both within `{}` and outside all `{}`. 

## 6. Expression and expression statement

We have discussed some statements, e.g. the `return` statements, the `printf` statements and the assignment statements.  The latter two are indeed two special cases of _expression statements_.  Formally, if we put a semicolon `;` at the end of an expression, it becomes a statement.  An assignment is an expression, a function call is also a statement [Note B] and so is a calculation (mathematics expression): 
```c
hour * 60 + minute;
```

Although this statement is legal, it is indeed useless.  The statement instruct the compiler to calculate the result, but does not save anything.   However, the following declaration and expression statement are meaningful: 
```c
int total_minute;
total_minute = hour * 60 + minute;
```
This calculates the total time in minutes. 

Why assignment is also an expression?  Like `+, -, *, /`, the assignment symbol `=` is also an _operator_, and the LHS and RHS of the `=` are the _operands_.  The expression takes the value of the value assigned to the LHS, but it also has a special function (*side-effect*): changing the value of the variable on the LHS. 

Every expression has two basic properties -- _value_ and _type_.  `hour * 60 + minute` was calculated with three integer operands, so its type is `int`.  `total_minute = hour * 60 + minute` assigns an integer to an integer variable, so its type is also `int`.

There are two important aspects of an operator: _precedence_ and _associativity_: 
- Precedence determines which part of the expression was evaluated first, when an operator is used with other operators.  For example, 
  `minutes + 60 * hour` means `minite + (60 * hour)`, instead of `(minite + 60) * hour`. 
- Associativity determines which part of the expression was evaluated first, when an operator appears together with operators with the same precedence.  For example, the basic mathematical operators are left-associative, meaning that `a - b + c` is evaluated as `(a - b) + c`, instead of `a - (b + c)`.  On the other hand, the assignment operator is right-associative, so `a = b = c` is evaluated as `a = (b = c)`, but not `(a = b) = c`.  The latter expression `(a = b) = c` does not make sense, as you can only assign a value to a variable, not the other way around. 

Now, let's conclude the grammar we have learnt [Note C] [Note D]: 

```
binary_arithmetic_operator: +, -, *, /
assignment_experssion: lvalue = expression
lvalue: variable_name
arithmetic_expression: expression binary_arithmetic_operator expression
function_call: function_name(argument_list)
argument_list: [expression[, expression]*]?
expression: 
    assignment_experssion
    arithmetic_expression
    function_call
    (expression)
expression_statement: expression;
block_statement: { [statement]* }
statement: 
    expression_statement
    block_statement
variable_declearation: 
    type_name identifier [= initializer]?[, identifier [= initializer]?]*;
```

An expression can be a single constant or variable, or a more complex expression composed according to the above rules. Previously, we used `printf` to print the values of constants or variables. Now we can use `printf` to print the values of more complex expressions, such as:
```c
printf("%d:%d is %d minutes after 00:00\n", hour, minute, hour * 60 + minute);
```

The compiler translates this statement by first parsing this statement into the syntax tree shown in the figure below according to the above syntax rules, and then generating the corresponding instructions according to the syntax tree. The ends of the syntax tree are tokens, and each step of expansion uses a syntax rule.

```
printf("%d:%d is %d minutes after 00:00\n", hour, minute, hour * 60 + minute);
   |   |                                 |   |      |      |     |      |
   |   +------- string literal ----------+   |      v      |     v      |
   |                    |                    v  identifier v  constant  v
   |                    |               identifier  |  identifier | identifier
   |                    |                    |      |      |      v     |
   |                    |                    |      |      v expression v
   |                    |                    |      |  expression   / expression
   |                    |                    |      |     \________/     /
   |                    |                    |      |     expression    /
   |                    |                    |      v       \_________/
   v                    v                    v   expression  expression
function_name       expression           expression                   /
     \              \________________________________________________/
      \                               argument_list
       \________________________________________/
                  function call 
```

According to these syntax rules, you can write more complex statements, such as completing calculation, assignment, and printing functions in one statement:
```c
printf("%d:%d is %d minutes after 00:00\n", 
       hour, minute, total_minute = hour * 60 + minute);
```

Understanding the composition rule is the key to understanding syntax rules. Because we can arbitrarily combine according to syntax rules, we can build arbitrarily complex programs with simple constants, variables, expressions, and statements. In the future, we will further appreciate this point when we learn new syntax rules. From the above examples, it can be seen that expressions should not be overly combined, otherwise it will bring difficulties to reading and debugging.

The expressions combined according to the syntax rules are not always semantically correct, for example:

The expression on the left side of the assignment operator requires a storage location rather than a value, which is another significant difference between the equals operator and the `+ - * /` operators.  Some expressions can represent both a storage location and a value, while some expressions can only represent a value and cannot represent a storage location. For example, the expression `minute + 1` cannot represent a storage location, and it is a semantic error to put it on the left side of the equals sign. The storage location represented by the expression is called lvalue (allowed to be placed on the left side of the equals sign), and the value of the expression we mentioned before is also called rvalue (can only be placed on the right side of the equals sign). Another way to say this is: some expressions can be both lvalues and rvalues, while some expressions can only be rvalues. Among the expressions we have learned so far, only variables can be lvalues. There are several types of expressions that can be lvalues, which will be discussed later.

Let's look at an interesting example. If you define three variables `int a, b, c;`, the expression `a = b = c` is legal. First calculate the value of `b = c`, and then assign this value to `a`. However, the expression `(a = b) = c` is illegal. It's okay to calculate the value of `(a = b)`, but the expression `(a = b)` can no longer be an lvalue, so it is wrong to put it on the left side of `= c`.

There is a special point about integer division operation:
```c
hour = 11;
minute = 59;
printf("%d and %d hours\n", hour, minute / 60);
```
The resule is `11 and 0 hours`.  This is because the expression of two `int` type operands divided is still `int` type, and can only save the integer part of the calculation result, even if the decimal part is 0.98, it must be discarded.
There are multiple way of converting a decimal number to an integer, e.g. rounding, ceiling, flooring.  However, C mandates a different method -- truncation towards zero, i.e. the decimal parts are always disregarded.  For example, the following are all true: 
```c
59 / 30 == 1;
-59 / 30 == -1;
```

If you want to get more fine-grained results, you can do this:
```c
printf("%d hours and %d percent of an hour\n", hour, minute * 100 / 60);
printf("%d and %f hours\n", hour, minute / 60.0);
```

In the second `printf`, the expression is `minute / 60.0`, 60.0 is `double` type, and the `/` operator requires the operands on both sides to be of the same type, but now they are not. C language stipulates a set of implicit type conversion rules. Here, the compiler automatically converts the `minute` on the left to `double` type for calculation, and the value of the entire expression is also `double` type, which should be used in the format string `%f` conversion specification corresponds to it. Originally, as a formal language, programming languages require simple and strict rules. The automatic type conversion rules are not only complicated, but also make the form of C language appears to be not so strict. 
These rules are a compromise the language designers made to balance between the tediousness of writing code and the difficulties of understanding code. 
Since the compiler can do conversion automatically, programmers don't have to write a bunch of tedious conversion code every time. However, the type conversion rules of C language are very difficult to master. The first few chapters of this book will try to avoid type conversion, and will focus on this issue in Chaper 15 Section 3 "Type Conversion".

### Exercises

1. Suppose `x` and `n` are two positive integers, we know that the result of the expression `x/n` is floored, for example, if `x` is 17 and `n` is 4, then the result is 4. If you want the result to take Ceiling, how should you write the expression? For example, if `x` is 17 and `n` is 4, then the result is 5; if `x` is 16 and `n` is 4, then the result is 4.

- [Note B]: we will later see that a function name can also be a statement. 
- [Note C]: Here, the colon `:` should be read as "is" or "are".  Naturally, we may say "'+' is a binary operator", but since the "be"-words in English is defined to be commutative, we may also say "A binary operator is '+'".  This convention is also used in some mathematics textbooks.  `[, expression]*` means zero or more "`, expression`", `[something]?` means zero or one "`something`" and `[something]+` means one or more "`something`". . 
- [Note D]: The syntax rules listed in this book are simplified and inaccurate, intended to facilitate beginners' understanding. For example, the syntax rules listed above do not describe the precedence and associativity of operators. For the complete C syntax rules, please refer to Annex A of [C11].

## 7. Character Types and Character Encoding

Character constants or character variables can also participate in arithmetic operations as integers. For example:
```c
printf("%c\n", 'a'+1);
```
The result of this operation is `b`.

We know that characters are represented by numbers inside the computer. Each character is assigned a unique integer value, known as a character encoding. The most commonly used character encoding is ASCII (American Standard Code for Information Interchange). The ASCII table can be found in [Figure A.1 "ASCII Table"](apas01.html#app-encoding.ascii). The range of ASCII values is from `0` to `127`. Many characters in the table are non-printable or whitespace characters, which are represented by names such as CR (carriage return), LF (NL line feed, newline), DEL, etc. As an exercise, you can check the positions of the characters listed in the ASCII tables (the appendix of this section).

In the previous example, the character 'a' has an ASCII value of 97, and the character 'b' has an ASCII value of 98. When evaluating the expression 'a'+1, the 'a' is treated as the integer value 97 according to ASCII, then 1 is added to it, resulting in 98. Finally, `printf` interprets 98 as an ASCII value and prints the corresponding character 'b'.

Previously, we mentioned that "integer" refers to the `int` type. Now we know that the char type is essentially an integer, but with a smaller range of values compared to int. Therefore, we can refer to both char and int types as integer types. We will learn about several other types that also fall under the integer type category in Chapter 15 Section 1 _Integer Types_. 

The ASCII values of characters `'a'` to `'z'`, `'A'` to `'Z'`, and `'0'` to `'9'` are consecutive. Therefore, the expression `'a'+25` is equal to `'z'`, and `'0'+9` is equal to `'9'`. Note that the ASCII values of `'0'` to `'9'` are hexadecimal `0x30` to `0x39`, which are different from the integer values 0 to 9.

Characters can also be represented using ASCII escape sequences. These escape sequences consist of a backslash followed by 1 to 3 octal digits, or `'\x'` or `'\X'` followed by 1 to 2 hexadecimal digits. They can be used in character constants or string literals. For example, `'\0'` represents the `NUL` character, `'\11'` or `'\x9'` represents the Tab character, and `"\11"` or `"\x9"` represents a string composed of Tab characters. Note that the ASCII value of `'0'` is `48`, while the ASCII value of `'\0'` is `0`, so they are different.


### Appendix: ASCII code chart

![US-ASCII code chart](images/US-ASCII_code_chart.png)

Each column of this table represents the first three bits of a character, and each row represents the last four bits.  Since every 4 bits of a binary number can be directly converted to a digit in hexadecimal representation.  Hence, for example, `'N'` in on the fourth column (counted from 0) and the 14-th row, so its hexadecimal representation is `0x4E` and its binary representation is `0b1001110`. 




# Chapter 2 C Statements

## 1. Branch statements

### 1.0 Null statement

In C, a plain semicolon `;`, unpaired with any expression, is also a statement, it is called a _null statement_. 
Combining with the block statement (e.g. `{ a = a + 1; b = a * a; }`) we have learnt, we have three kinds of statements now: 

```c
block_statement: { [statement]* }
statement: 
    ;
    expression_statement
    block_statement
```

In the following sections, we will learn more. 

### 1.1 If statements

The grammar for the if-statements can be summarized below: 
```c
if_statement: if (expression) statement [else statement]?
```
In natural language, it means an if-statement starts with the word `if`, following by a pair of parenthesis `()`, in which an expression appears, which control whether the following statement will be executed.  Due to its functionality, such expression is called a _controlling expression_.   You may optionally pair an `if` with an `else` clause, allowing the next statement to be executed, if the expression is not true. 

Due to the condition checking and selective execution, the `if` statement modifies the _control flow_ of the program, the way `if` modifies the control flow is called _branching_. 

For example, 
```c
if (x != 0)
    printf("x is nonzero.\n");
```
or 
```c
if (x != 0)
    printf("x is nonzero.\n");
else
    printf("x is zero.\n");
```
We may use block statements instead: 
```c
if (x != 0) {
    printf("x is nonzero.\n");
} else {
    printf("x is zero.\n");
}
```

Here, `!=` means "not equal to".  The other logical operators are summarized below: 

| Classification      | Operator | Meaning                       |
| :-:                 | :-:      | :-:                           |
| Equality operator   | `==`     | "equals"                      |
| Equality operator   | `!=`     | "is not equal to"             |
| Relational operator | `>`      | "is greater than"             |
| Relational operator | `>=`     | "is greater than or equal to" |
| Relational operator | `<`      | "is less than"                |
| Relational operator | `<=`     | "is less than or equal to"    |

All logical operators will evaluate to 1 if the condition is met and 0 if the condition is not met.  For example: 
```c
printf("%d, %d\n", 1 != 2, 1 == 2);
```
This program will output `1, 0`


There are a few points to note: 
1. Relational operators have higher precedence than equality operators. 
2. The `==` operator in C represents the mathematical equality relation, similar to the $=$ operator in mathematics. It is a common mistake for beginners to confuse `==` with `=`, but in C, `=` is the assignment operator and `==` is used for comparison.
3. In C, the result of a comparison expression is either true (represented by the integer value 1) or false (represented by the integer value 0).  However, the `if` statement will regard any non-zero value in the controlling expression as true. 
4. In mathematics, $a < b < c$ means that b is greater than a and less than c. However, in C, these operators are left associative. Think about how this expression should be evaluated.
5. Comparison operators in C require both operands to be of the same type. You can compare two integers or two floating-point numbers, but you cannot compare two strings. We will discuss string comparison methods in Chapter 25 Section 1.5 "Comparing Strings".

Now we introduce one more grammar into block statements: 
```c
block_statement: { [definition,statement]* }
```
In natural language, this means we may define a local variable inside a block: 
```c
int main(void) {
	int i = 0;
	{
		int i = 1;
		int j = 2;
		printf("i=%d, j=%d\n", i, j);
	}
	printf("i=%d\n", i); /* cannot access j here */

	return 0;
}
```
The output is 
```
i=1, j=2
i=0
```

Since if statement may accept a block, we can also do: 
```c
int main(void) {
	int i = 0;
    if (i == 0) {
		int i = 1;
		int j = 2;
		printf("i=%d, j=%d\n", i, j);
	}
	printf("i=%d\n", i); /* cannot access j here */

	return 0;
}
```

Now, consider the mathematical function: 
$$
  f(x) = \left\{ 
    \begin{matrix}
      0 & \text{if } x \le 0 \\ 
      x & \text{if } 0 < x < 1  \\
      1 & \text{otherwise }
    \end{matrix}
  \right.
$$

Suppose you want to implement this function and store the result into a variable `y`.  We would probably want to write code like:
```c
    double x = /* some value */;
    double y;
    if (x < 0) {
        y = 0;
    } else {
        if (x < 1) {
            y = x;
        } else {
            y = 1;
        }
    }
```
To make the code shorter, because the `if` statement itself is a statement, and it is the only statement in the block, we can remove the curly brackets around the sub-if statement: 

**Code snip 2.1.1**
```c
    double x = /* some value */;
    double y;
    if (x < 0) {
        y = 0;
    } else 
        if (x < 1) {
            y = x;
        } else {
            y = 1;
        }
```

This is indeed the "correct" way of indentation, if you want to highlight the hierarchy of if statements.  However, as a convention, we usually write the nested if statements in else clause in the following format: 

**Code snip 2.1.2**
```c
if ( /* ... */ ) {
    /* ... */
} else if ( /* ... */ ) {
    /* ... */
} else if ( /* ... */ ) {
    /* ... */
} else {
    /* ... */
}
```
The reason will be clear after you complete exercise 6. 

Another interesting but dangerous point about if-statements is the dangling-else problem.  Suppose you have a statement that looks like `if (A) if (B) C; else D;`.  It is reasonable for the compiler to regard it as 
```c
if (A)
	if (B)
		C;
else
	D;
```
It is also reasonable to see it as 
```c
if (A)
	if (B)
		C;
	else
		D;
```
However, the indentations are only for programmers to read, the compiler will not try to understand the indentation.  Hence, only one of them is correct.  Many programming languages have similar problems (Python is a very notable exception).  The C language standard mandate that the `else` should always be paired with the nearest `if`, i.e. the second understanding is indeed correct in C.
Writing code with indentation like the first method is a very good way to confuse whoever reads your code.  If you want to compiler to understand your code in the first way, just use a pair of brackets: 
```c
if (A) {
	if (B)
		C;
} else
	D;
```
Or, even better, unless your `if` statement is at the last level, always use a pair of bracket: 
```c
if (A) {
	if (B)
		C;
	else
		D;
}
```

By the way, it is worth mentioning that due to the special characteristics of floating-point numbers, the result of floating-point calculation may not be suitable for comparison using `==`.  For example, 
```c
	float i = 20.0;
	float j = i / 11.0;
	if (j * 11.0 == i)
		printf("Equal.\n");
	else
		printf("Unequal.\n");
```
The implementation of floating-point numbers can vary slightly from platforms to platforms.  On my machine, the result is "`Unequal.`".  If you get "`Equal.`" on your machine, you can try to change `i` or the divisor, some values can make the result to be "`Unequal.`".  The reason will be clear after Chapter 14 Section 4 Floating-point numbers. 

TODO: move encapsulation in this section to function

#### Exercises

1. What's the meaning of `a < b < c`?
2. The following program is syntactically correct and makes no runtime error.  However, the execution result is wrong.  What's the problem?  Why the compiler still believe it is OK?
```c
int x = -1;
if (x > 0);
	printf("x is positive.\n");
```
3. Let `a` and `b` be two integer typed number in C, and `b != 0`.  `a % b` reads as "`a` modulo `b`", the value is the remainder of the division of `a` by `b`.  The C standard requires (a) `a / b` must be truncated towards zero, and (b) `(a / b) * b + a % b == a`.  Prove that `a % b` and `a` must have the same sign.  Hint: 
    1. Write out the statements in mathematics notations. 
    2. Prove the case where `a` is non-negative and `b` is positive.  Then, reduce the other three cases into this case. 
4. Write two _expressions_ that get the last and the second-to-last digit of an integer (in its decimal representation). 
5. Write an if statement to print the parity of an integer `x` (i.e. whether `x` is even or odd). 
6. Now, suppose we want to implement the following mathematical function: 
    $$
      f(x) = \left\{ 
        \begin{matrix}
          0 & \text{if } x \le 0 \\ 
          x & \text{if } 0 < x \le 1  \\
          1 & \text{if } 1 < x \le 2  \\
          x - 1 & \text{if } 2 < x \le 3  \\
          2 & \text{otherwise }
        \end{matrix}
      \right.
    $$
    Write your code with two different formats, one being the same as Code snip 2.1.1 and the other as Code snip 2.1.2. 
    Briefly explain why C programmers always prefer the style in Code snip 2.1.2. 

### 1.2 Boolean algebra

Boolean algebra is a separate subject to be discussed in Discrete Mathematics or Digital Circuits.  We shall only do a very brief review, while talking about C's grammar. 

```c
binary_logical_operator: [||, &&]
negation_operator: !
binary_operator: 
    binary_arithmetic_operator
    equality_operator
    relational_operator
    binary_logical_operator
unary_operator: negation_operator
```

`||` is called logical OR, `&&` is logical AND and `!` is logical negation (or logical NOT). 

C programmers like to use integer types for boolean algebra.  Although C99 and C23 define a separate types for boolean variables, they are not commonly used.  An operand of a boolean expression will be taken as true, if its value is not zero, but the resulting value of a boolean expression will always be either 0 or 1.  The truth values of the three operators can be written in truth table: 

**The truth table of AND**

| `A` | `B` | `A && B` |
| -: | -: | -: |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |


**The truth table of OR**

| `A` | `B` | `A OR B` |
| -: | -: | -: |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |


**The truth table of NOT**

| `A` | `!A` |
| -: | -: |
| 0 | 1 |
| 1 | 0 |


For convenience, we use `1` in the input columns of the truth tables to denote any non-zero values. 

Logical negation is an unary operator, which has higher precedence than everything we have learnt, except things in parenthesis.  Logical AND `&&` has lower precedence than relational operators, but higher precedence than logical OR `||`. 

#### Exercises

1. Modify the code
```c
if (x > 0 && x < 10);
else
	printf("x is out of range.\n");
```
  to the following form: 
```c
if (____ || ____)
	printf("x is out of range.\n");
```
2. Modify the code
```c
if (x > 0)
	printf("Test OK!\n");
else if (x <= 0 && y > 0)
	printf("Test OK!\n");
else
	printf("Test failed!\n");
```
  to the following form: 
```c
if (____ && ____)
	printf("Test failed!\n");
else
	printf("Test OK!\n");
```
3. Suppose we have the following code: 
```c
if (x > 1 && y != 1) {
	...
} else if (x < 1 && y != 1) {
	...
} else {
	...
}
```
  The last `else` will be executes, if and only if `x` and `y` satisfy a condition with the form `____ || ____`.  What's the condition? 
4. One `if` condition in the following code may be removed without affecting the functionality, which one is that? 
```c
if (x<3 && y>3)
	printf("Test OK!\n");
else if (x>=3 && y>=3)
	printf("Test OK!\n");
else if (z>3 && x>=3)
	printf("Test OK!\n");
else if (z<=3 && y>=3)
	printf("Test OK!\n");
else
	printf("Test failed!\n");
```

### 1.3 Switch-case statements

Previously, we introduced constant and variables.  To introduce the switch-case statements, we first  need to refine the definition for expressions: 
```c
expression: 
    constant_expression              <--- (new) 
    identifier                       <--- (new)
    assignment_experssion
    function_call
    calculation_expression
    (expression)
```

Now, we may define the switch-case statements:
```c
switch-case_statement:
    switch (expression) { \
    [ \
    [case constant_expression:, default:] \
        [statement]* \
    ]* \
    }
statement: 
    ;
    expression_statement
    block_statement
    if_statement
    switch-case_statement
    break;
    continue;
```

We also introduced two more keywords, `break` and `continue`.  They will be more detailed discussed more in the coming sections.  For now, we introduce the functionality of `break` in switch-case statements.  Typically, we write a switch-case statement like following: 
```c
	switch (day) { 
	case 1:
		printf("Monday\n");
		break;
	case 2:
		printf("Tuesday\n");
		break;
	case 3:
		printf("Wednesday\n");
		break;
	case 4:
		printf("Thursday\n");
		break;
	case 5:
		printf("Friday\n");
		break;
	case 6:
		printf("Saturday\n");
		break;
	case 7:
		printf("Sunday\n");
		break;
	default: 
		printf("Invalid day number.\n");
		break;
	}
```
There are some constrains about switch-case 
1. The expression following `case` should always be a constant expression, i.e. an expression whose value can be determined at the compilation time. 
2. each case should appear at most once, and, hence, there should be at most one `default` clause. 
3. Since it is hard to perform exact comparison floating-point, each case expression must be of integer types [Note A].
4. If no `break` is seen at the end of each case, the execution will carry on, and fall-through to the next case. This is why we typically pair a `case` with a `break`.  However, sometimes we use this feature on purpose:
```c
	switch (day) { 
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
		printf("Weekday\n");
		break;
	case 6:
	case 7:
		printf("Weekend\n");
		break;
	default: 
		printf("Invalid day number.\n");
		break;
	}

```

Switch-case statements are clearly not necessary in a programming languages.  They can always be replaced by a group of `if ... else if ... else if ... else ...` statements, and in a higher-level high-level language, such as Java or Python, both switch-case and long sequence of `else if` should be avoid, using some good design pattern.  However, due to the nature of C, we need to write some low-level applications, which may require we perform different action based on different hard-coded value in hardware.  For example, in a hardware register, an integer between 0 and 15 can represent 16 different commands, and we have to perform different operations based on the commands.  In this case, a switch-case statement makes the code easier to understand.  Plus, switch-case statements are usually easier to optimize for a compiler, which _could_ _sometimes_ make the code more efficient. 

TODO: put an exercise in "array" to implement the same functionality. 

- [Note A]:  If you come back after you master C, you will find my argument here is rather weak.  Then, can you think about other argument for not allowing floating-point in each `case`? 

## 2. Functions

### 2.1 Function calls and side effects

We have only called a function before, the `printf` function.  Now, let's review the syntax for function call: 
```c
function_call: function_name(argument_list)
argument_list: [expression[, expression]*]?
expression: 
    ...
    function_call
expression_statement: expression;
```

C standard library also provides some mathematical functions, for example sine `sin`, cosine `cos` and natural logarithm `log`: 
```c
#include <math.h>
#include <stdio.h>

int main(void)
{
	double pi = 3.1416;
	printf("sin(pi/2)=%f\nln1=%f\n", sin(pi/2), log(1.0));
	return 0;
}
```
To compile this program, you need an `-lm` option when running gcc.  This option advices the compiler to find the function in `libm.so`, which is where the math functions located.  Most standard library functions are inside `libc.so`, so we may add a `-lc` option to link them.  However, this option is added by default, so there is no need to add them by ourselves. 

One main difference between `printf` and mathematical function is that we don't usually care about its return value, but we are more interested in its behaviours other than returning a value -- print something out.  The effect of creating some effects besides returning a value is called _side effects_.  You are allowed to define a C function with side effects or return a value or both. 

The concept of "side effects" also applies to expressions composed of operators. For example, the expression `a + b` can be viewed as a function call, where the operator `+` is seen as a function. It has two parameters, `a` and `b`, and the return value is the sum of the two parameters. It takes in two parameters and returns a value, without producing any side effect.

However, the assignment operator does have a side effect. If we view the expression `a = b` as a function call, the return value is the assigned value, which is both the value of `b` and `a`. But in addition to this, it also produces a side effect, which is that the variable `a` is changed. Changing the data in the computer's storage unit or performing input/output operations are considered side effects. 

### 2.2 Defining a function

talk about arguments and parameters

local variables and global variables

### 2.3 return statement

TODO: void types values

### 2.4 Integrated Exercise: Recursion

TODO: Incremental development


#### Side note: C standard library

The C standard mainly consists of two parts, one describes the syntax of C, and the other describes the C standard library. The C standard library defines a set of standard header files, each of which contains some related functions, variables, type declarations, and macro definitions. To support C language on a platform, it is necessary not only to implement a C compiler but also to implement the C standard library. Such an implementation is considered to comply with the C standard. There are also implementations that do not comply with the C standard, such as many microcontroller C development tools that only have a C compiler but do not have a complete C standard library.

The most widely used C library on the Linux platform is glibc, which includes the implementation of the C standard library and all system functions introduced in the third part of this book. Almost all C programs need to call the glibc library functions, so glibc is the basis for running C programs on the Linux platform. glibc provides a set of header files and a set of library files. The most basic and commonly used C standard library functions and system functions are in the `libc.so` library file. Almost all C programs depend on `libc.so`. Some C programs that do mathematical calculations depend on `libm.so`. When you learn about multithreading, you will know that multithreaded C programs depend on `libpthread.so`. In the future, when I say `libc`, I specifically refer to the `libc.so` library file, and when I say glibc, I mean all the library files provided by glib.

glibc is not the only basic C library on the Linux platform. Some people are developing other C libraries, such as uClibc suitable for embedded systems. 


## 3. Other control flow statements

### 3.1 goto statement

The main purpose of this section is not teach you how to use `goto`.  It is used with the following sections to teach you when not to use `goto`. 

```c
label: identifier
labeled_statement: label: statement
statement: 
    ;
    expression_statement
    block_statement
    if_statement
    switch-case_statement
    break;
    continue;
    labeled_statement      <----- (new)
    goto_statement         <----- (new)
goto_statement:
    goto label;
```

Example: Write a function to calculate the factorial of a positive integer. 
```c
long factorial (long n) {
	long res = 1;
factorial_mul:
	res *= n;
	n--;
	if (n >= 1)
		goto factorial_mul;
	return res;
}
```

The third and fourth line define a labeled statement whose label is `factorial_mul`.  In the subsequent lines, we check for a condition, and go back to the labeled statement if it is met.  The result is effectively a _loop_.  However, `goto`-statements are more capable then that: 

TODO: a spaghetti demo 

To restrict ourselves from making this mess and to better communicate with other programmers, we need some better tools.  C has prepared some loop statements for us. 

### 3.2 Loops

TODO: Specify the functionalities of loops using `goto` statements


```c
iteration_statements:
    while (expression) statement
    do statement while (expression);
    for ([expression]; [expression]; [expression]) statement
    for ([declation_expression]; [expression]; [expression]) statement

statement: 
    ...
    iteration_statements
```

The iteration_statements are called while-loop, do-while-loop and for-loop respectively. 
Without the consideration of `break` and `continue` (that are to be discussed in the next section), we specify the functionalities of the loops using `goto` statements: 
```c
// while (expression) statement
{
begin_while:
    if (!(expression))
        goto end_while;
    statement
    goto begin_while:
end_while: 
    ;
}

// do statement while (expression);
{
begin_do:
    statement;
    if (expression)
        goto begin_do;
}

// for ([expression_a]; [expression_b]; [expression_c]) statement
{
    expression_a;
    while (expression_b) {
        statement
        expression_c;
    }
}
```

Now, we may re-write the code for `factorial(n)` in a way most programmers prefer: 
```c
long factorial (long n) {
	long res = 1;
	for (long i = 1; i <= n; i++) {
		res *= i;
	}
	return res;
}
```

One "advantage" of the above code using `goto` than using a `for`-loop is it "reduces" the memory consumption of one variable.  We can certainly change our `for`-loop to use one less variable.  However, like using `goto` statements, it is at the cost of code readability.  Furthermore, a good compiler may choose to optimize the code such that it functions that same but runs more efficiently; hence, the actual compiled machine code for the above examples are likely to be very similar. . 

In general, the rule-of-thumb is _not to use `goto`_, but there could be some valid exceptions, for example, jumping out from a nested loops, especially for error handling: 

```c
for (...)
    for (...) {
        ... // some resources are allocated here. 
        if (error condition)
            goto error;
    }
error:
    error handling;
```

Without the `goto` statement, the code would be much longer and require extra condition checking (which creates more chances for error). 

```c
int cond = 0;     // error indication
for (...) {
    for (...) {
        ... // some resources are allocated here. 
        if (error condition) {
            cond = 1;
            break
        }
    }
    if (cond) 
        break;
}
if (cond) 
    error handling;
```

Some languages (like Java) are able to eliminate the `goto` statement totally, because they have proper exception throwing and automatic garbage collection. 

#### Exercises

1. Use while-loop and do-while-loop to implement `factorial(n)`

### 3.3 `break` and `continue` in loops

The `break` statement is used to end the current loop and the `continue` statement is used to end the current iteration.   More formally, they are equivalent to `goto break_(loopname)` and `continue_(loopname)` below: 

```c
// while (expression) statement
{
begin_while:
continue_while:
    if (!(expression))
        goto end_while;
    statement
    goto begin_while:
end_while: 
break_while:
    ;
}

// do statement while (expression);
{
begin_do:
continue_do:
    statement;
    if (expression)
        goto begin_do;
break_do:
    ;
}

// for ([expression_a]; [expression_b]; [expression_c]) statement
{
    expression_a;
    while (expression_b) {
        statement
continue_for:
        expression_c;
    }
break_for:
    ;
}
```

Let's see an example: 

```c
#include <stdio.h>

int is_prime(int n)
{
	int i;
	for (i = 2; i < n; i++)
		if (n % i == 0)
			break;
	if (i == n)
		return 1;
	else
		return 0;
}

int main(void)
{
	int i;
	for (i = 1; i <= 100; i++) {
		if (!is_prime(i))
			continue;
		printf("%d\n", i);
	}
	return 0;
}
```

#### Exercises

1. Briefly (I mean _very_ briefly) explain why we use `break` when checking whether a number if prime and why `continue` for printing? 
2. The usage of `break` and `continue` here are purely for demonstration purpose.  They are totally unnecessary.  Modify the code to eliminate the two statements but retain the functionalities.  Your final code is likely to contain something called "early-return pattern". 

### 3.4 Integrated exercise: Nested loops

TODO

## 4. Structures

In this section, we shall briefly introduce how to define a structure (or `struct`).  The technical details will be introduced in Chapter 7. 

```c
structure_declaration_statement: \
   struct indentifier { \
       [declaration_statements]* \
   } [indentifier[, identifier]*]?;
```

The declaration of a `struct` means packing some data items together in the order specified, for example: 
```c
struct complex_struct {
	double x, y;
} z1, z2;
```

Individual member of a `struct` is accessible via the `.` operator: 
```c
	double x = 3.0;	
	z.x = x;
	z.y = 4.0;
```

All of the followings are valid way to initialize a `struct`: 
```c
double x = 3.0;
struct complex_struct z1 = { x, 4.0, }; /* z1.x=3.0, z1.y=4.0 */
struct complex_struct z2 = { 3.0, }; /* z2.x=3.0, z2.y=0.0 */
struct complex_struct z3 = { 0 }; /* z3.x=0.0, z3.y=0.0 */
struct complex_struct z4 = { .y = 4.0 }; /* z4.x=0.0, z4.y=4.0 */
struct complex_struct z5 = z4;
```

However, all but the last one `z5 = z4` cannot be used as an assignment statement, i.e. they are only valid when performing initialization. 


## Summary of C grammar 

The code block below summarizes all C grammar we have discussed so far.  For compactness, some contents are omitted from the list, for example: 
- Character: `'a'`
- String literal: `"string"`

```c
comment:
    /*text*/
    //text
binary_arithmetic_operator: [+, -, *, /, %]
equality_operator: [==, !=]
relational_operator: [<, >, <=, >=]
binary_arithmetic_operator: []
binary_operator: 
    binary_arithmetic_operator
    equality_operator
    relational_operator
    binary_logical_operator
unary_operator: 
    !
assignment_experssion: lvalue = expression
lvalue: variable_name
calculation_expression: 
    expression binary_operator expression
    unary_operator expression
function_call: function_name(argument_list)
argument_list: [expression[, expression]*]?

expression: 
    constant_expression
    identifier
    assignment_experssion
    function_call
    calculation_expression
    (expression)

expression_statement: expression;

block_statement: { [definition,statement]* }
statement: 
    ;
    expression_statement
    block_statement
    if_statement
    switch-case_statement
    break;
    continue;
    labeled_statement
    goto_statement
    iteration_statements
if_statement: if (expression) statement [else statement]?
switch-case_statement:
    switch (expression) { \
    [ [case constant_expression:, default:] [statement]* ]* \
    }
label: identifier
labeled_statement: label: statement
goto_statement:
    goto label;
iteration_statements:
    while (expression) statement
    do statement while (expression);
    for ([expression]; [expression]; [expression]) statement
    for ([declation_expression]; [expression]; [expression]) statement


variable_declaration: 
    type_name identifier [= initializer]?[, identifier [= initializer]?]*;

function_definition: type_name function_name (parameter_list) block_statement
parameter_list: [type_name identifier [, type_name identifier]*]?
```

The meanings of symbols in this list:

- `[something]*`: zero or more "`something`"
- `[something]+`: one or more "`something`"
- `[something]?`: zero or one "`something`"
- `[a,b]`: `a` or `b`
- Each row represents one choice, unless ended by `\`

# Part II  Data and data operations

This part contains most information you will know about data in C and their operations that do not involve pointers.
We first introduce basic concepts about sturct and arrays.  Detailed discussion about arryas are deferred to Part III.  Then multiple data types and operators on these data types are discusses.  We will also introduce `gdb`, the most basic, but fully functional debugger in this section.

This part are adapted from Chapter 7, 8, 10, 14, 15 and 16 from Song's book.

# Chapter 8 Arrays 

## 1. Basic Concepts of Arrays

Arrays are also a composite data type, consisting of a series of elements
of the same type. For example, define an array `count` consisting of
4 `int` type elements:

~~~c
int count[4];
~~~

Similar to structure members, the storage space of the 4 elements of the array
`count` is also adjacent. Structure members can be basic data types or
composite data types, and the elements in the array are the same. According
to the combination rules, we can define an array composed of 4 structure
elements:

~~~c
struct complex_struct {
	double x, y;
} a[4];
~~~

You can also define a structure with an array member:

~~~c
struct {
	double x, y;
	int count[4];
} s;
~~~

The length of the array type should be specified by an integer constant
expression (Paul: the rule has changed in C11 for local variables). [Note 16] The elements in the array are accessed through subscripts (or
indexes, Index). For example, the array `count` consisting of 4 `int` type
elements is illustrated as follows:

![Array count](images/array.count.png)

The entire array occupies 4 `int` type storage units, the storage units are
represented by small squares, the numbers inside are the data stored in this
unit (assuming all are 0), and the numbers outside the box are subscripts.
These four units are accessed by `count[0]`, `count[1]`, `count[2]`, and
`count[3]`. Note that when defining the array `int count[4];`, the number 4 in
the brackets indicates the length of the array, and when accessing the array,
the number in the brackets indicates which element of the array is accessed.
Unlike our usual counting, array elements start counting from "the 0th"; most
programming languages have the same convention, so there is a word "zeroth" in
computer terminology. This rule makes it very convenient to access array
elements. For example, each element in the `count` array occupies 4 bytes, so
`count[i]` represents the storage unit after skipping `4*i` bytes from the
beginning of the array. This kind of array subscript expression can not only
represent the value in the storage unit but also represent the storage unit
itself, that is, it can be used as an lvalue, so the following statements are
correct:

~~~c
count[0] = 7;
count[1] = count[0] * 2;
++count[2];
~~~

So far, we have learned five postfix operators: postfix `++`, postfix `--`,
taking structure (and union) member `.`, array subscription `[]`, and function
call `()`. We have also learned five unary operators (or prefix operators):
prefix `++`, prefix `--`, positive sign `+`, negative sign `-`, and logical not
`!`. In C language, the priority of postfix operators is the highest, and the
priority of unary operators is second only to postfix operators, which is
higher than the priority of other operators. So the example `++count[2]` above
should be regarded as doing prefix `++` operation on `count[2]`, i.e. `count[2] += 1`. 

Array subscripts can also be expressions (instead of a single number), but the
value of the expression must be of integer type. For example:

~~~c
int i = 10;
count[i] = count[i+1];
~~~

You cannot use array subscripts beyond the length range of the array.  You should 
be especially careful when using variables as array subscripts. The C
compiler does not check access out-of-bounds errors such as `count[-1]` or
`count[100]`, i.e. they can pass smoothly during compilation. 
However, unless you know what you are doing, these are likely to trigger
runtime errors [Note 17]. But sometimes this kind of error is very subtle and difficult to find. 
When an access out-of-bounds occurs, the program may not crash immediately, but it may crash
suddenly when executing a correct statement later (we will see such examples in
Section 4 "Segment Error"). So be careful to avoid problems from the beginning
of writing code; otherwise, the cost of relying on debugging to solve problems
afterwards is very high.

Arrays can also be initialized like structures. Elements without initial values
are also initialized with 0, for example:

~~~c
int count[4] = { 3, 2, };
~~~

Then `count[0]` is equal to 3, `count[1]` is equal to 2, and the last two
elements are equal to 0. If you define an array and initialize it at the same
time, you can also not specify the length of the array, for example:

~~~c
int count[] = { 3, 2, 1, };
~~~

The compiler determines the length of the array to be 3 based on the fact that
Initializer has three elements. Using a new features of C99 (Paul: well, it is
not longer "new"), you can also do memberwise initialization:

~~~c
int count[4] = { [2] = 3 };
~~~

Here is a complete example:

```c
#include <stdio.h>

int main(void)
{
    int count[4] = { 3, 2, }, i;

    for (i = 0; i < 4; i++)
        printf("count[%d]=%d\n", i, count[i]);
    return 0;
}
```

This example traverses each element in the array in turn through the loop, and
in computer terms, it is called traversal. Note the control expression `i < 4`;
if it is written as `i <= 4`, it is wrong, because `count[4]` is an access
out-of-bounds.

Although arrays and structures have many similarities, there is also a
significant difference: arrays cannot be assigned or initialized to each other.
For example, this is wrong:

~~~c
int a[5] = { 4, 3, 2, 1 };
int b[5] = a;
~~~

Mutual assignment is also wrong:

~~~c
a = b;
~~~

Since they cannot be assigned to each other, they cannot use array types as
function parameters or return values. If you write such a function definition:

~~~c
void foo(int a[5])
{
	...
}
~~~

Then call like this:

~~~c
int array[5] = {0};
foo(array);
~~~

The compiler will not report an error, but this is not the meaning of passing
an array type parameter. There is a special rule for array types: when used as
rvalues, they are automatically converted to pointers to the first element of
the array. So the function call above is actually passing a pointer type
parameter, not an array type parameter. In the next few chapters, some
functions need to access arrays, so we define arrays as global variables for
function access, and use the method of passing parameters after talking about
pointers. This also explains why array types cannot be assigned or initialized
to each other. For example, the `a = b` mentioned above, both `a` and `b` are
array type variables, but `b` is used as an rvalue and is automatically
converted to a pointer type, while the left side is still an array type, so the
compiler reports an error: `error: incompatible types in assignment`.

## Exercises

1. Write a program to define two arrays of the same type and length, and copy
   all elements of one array to the other. Since arrays cannot be directly
   assigned, think about how to implement it.

- [Note 16]: Obsolete
- [Note 17]: Why compilers cannot detect such obvious errors in code. The first reason is that such errors are not always obvious, as accessing arrays through pointers can lead to situations where the pointer points to an unknown location in the array at runtime, making it impossible for the compiler to check for out-of-bounds errors at compile time. Checking for out-of-bounds errors at runtime for every array access would severely impact performance, so the compiler simply does not check. The second reason is that the design philosophy of the C language, as stated in the [C99 Rationale], is to trust that every C programmer is an expert and to not prevent them from doing what they need to do. The use of techniques such as count[-1] by experts should not be considered an error.  (Paul: of course, if used correctly.)

<!--
Please translate this file to markdown, while translating it to English. 
Enclose the markdown code you generated in a code block using "```". 
Replace "```" in the markdown code you generated by "~~~".  Make sure the grammar is correct and use classroom tones, as far as possible.  You may change the order of words and sentences or modify a few phases, if this will make the document easier to read. 
-->

## 2. Array Application Example: Counting Random Numbers

In this section, we will introduce some basic patterns of using arrays through an example. The problem is as follows: First, generate a list of random numbers from 0 to 9 and save them in an array. Then, count the occurrences of each number and print the results to check the randomness of these numbers. Random numbers are very useful in some situations (such as game programming), but generating true random numbers with a computer is not that easy. The result of each instruction executed by a computer is deterministic, and no instruction produces random numbers.  (Paul: some CPUs indeed support this physically, but it is going to be _very very slow_). The random numbers obtained by calling the C standard library are actually pseudorandom numbers, which are determined by mathematical formulas. However, these numbers appear to be random and are statistically close to uniformly distributed random numbers.

The `rand` function in the C standard library generates pseudorandom numbers. To use this function, you need to include the header file `stdlib.h`. It has no parameters, and its return value is an integer close to a uniform distribution between `0` and `RAND_MAX`. `RAND_MAX` is a constant defined in the header file, and its value varies on different platforms, but it is definitely a very large integer. Usually, the random numbers we need are limited to a certain range, such as `0` to `9`, rather than `0` to `RAND_MAX`. We can use the `%` operator to process the return value of the rand function:

```c
int x = rand() % 10;
```

The complete program is as follows:

~~~c
#include <stdio.h>
#include <stdlib.h>
#define N 20

int a[N];

void genrandom(int upperbound)
{
    int i;
    for (i = 0; i < N; i++)
        a[i] = rand() % upperbound;
}

void printrandom()
{
    int i;
    for (i = 0; i < N; i++)
        printf("%d ", a[i]);
    printf("\n");
}

int main(void)
{
    genrandom(10);
    printrandom();
    return 0;
}
~~~

Here, we introduce a new syntax: defining a constant with `#define`. In fact, the work of the compiler is divided into two stages: the preprocessing stage and the compilation stage. Using the `-E` option of gcc, you can see the program after preprocessing and before compilation, for example:

~~~bash
$ gcc -E main.c
~~~

~~~c
// (Here, many lines of stdio.h and stdlib.h code are omitted)
int a[20];

void gen_random(int upper_bound)
{
	int i;
	for (i = 0; i < 20; i++)
		a[i] = rand() % upper_bound;
}

void print_random()
{
	int i;
	for (i = 0; i < 20; i++)
		printf("%d ", a[i]);
	printf("\n");
}

int main(void)
{
	gen_random(10);
	print_random();
	return 0;
}
~~~

As you can see, the preprocessor does two things here: first, it expands the
header files `stdio.h` and `stdlib.h` in the code; second, it replaces the
`#define` defined identifier `N` with its definition 20 (three replacements
are made in the code, located in the array definition and the two functions).
Lines starting with a `#` symbol, such as `#include` and `#define`, are called
preprocessing directives. We will learn other preprocessing directives in
Chapter 21, "Preprocessing". In addition, using the `cpp main.c` command can
achieve the same effect, only preprocessing without compiling; `cpp` stands
for C preprocessor.

So, what is the difference between constants defined with `#define` and
enumeration constants discussed in Section 3, "Data Type Flags"? First,
`define` is not only used to define constants but also to define more complex
syntax structures called macro definitions. Second, `define` definitions are
processed during the preprocessing stage, while enumerations are processed
during the compilation stage. Try changing the program in Section 3, "Data
Type Flags" Exercise 2 to the following and see what happens:


~~~c
#include <stdio.h>
#define RECTANGULAR 1
#define POLAR 2

int main(void)
{
    int RECTANGULAR;
    printf("%d %d\n", RECTANGULAR, POLAR);
    return 0;
}
~~~

Note that although `include` and `define` have special meanings in
preprocessing directives, they are not C language keywords. In other words,
they can also be used as identifiers, such as declaring `int include;` or
`void define(int);`. During the preprocessing stage, if a line starts with a
`#` symbol followed by `include` or `define`, the preprocessor considers it a
preprocessing directive. Otherwise, `include` or `define` appearing elsewhere
is not a concern for the preprocessor and is treated as a regular identifier
for the compilation stage to handle.

Returning to the random number program, at first, we chose a smaller array
length for easier analysis and debugging, generating only 20 random numbers.
The program's output is:

~~~
3 6 7 5 3 5 6 2 9 1 2 7 0 9 3 6 0 6 2 6
~~~

It looks quite random. But how about the randomness? Is the distribution
uniform? A uniform distribution means that the probability of each number
appearing is the same. In the 20 results above, 6 appears 5 times, while 4 and
8 do not appear at all. However, this does not prove anything, as our sample
size is too small, only 20 numbers. If there are enough samples, such as
100,000 numbers, counting the occurrences of each number might reveal the
distribution. But we can't print all 100,000 numbers and count them one by
one, right? We need to write a function to count the occurrences of each
number. The complete program is as follows:

~~~c
#include <stdio.h>
#include <stdlib.h>
#define N 100000

int a[N];

void gen_random(int upper_bound)
{
    int i;
    for (i = 0; i < N; i++)
        a[i] = rand() % upper_bound;
}

int howmany(int value)
{
    int count = 0, i;
    for (i = 0; i < N; i++)
        if (a[i] == value)
            ++count;
    return count;
}

int main(void)
{
    int i;

    gen_random(10);
    printf("value\thow many\n");
    for (i = 0; i < 10; i++)
        printf("%d\t%d\n", i, howmany(i));

    return 0;
}
~~~

By changing the value of `#define N` to 100,000, we effectively change all instances of N in the entire program to 100,000. If we don't write it this way and instead define the array directly as `int a[20];` and use the value `20` directly in each loop, this is called hard coding. If the original code was hard-coded, it would be very troublesome to change `20` to `100000`. You would need to search the entire code to determine which `20`s represent the length of the array and change them to `100000`, and which `20`s represent other quantities and leave them unchanged. If the code is long, this is prone to errors. Therefore, when writing code, try to avoid hard coding as much as possible. This is actually a process of "factoring out common factors" and has the same effect as the abstraction discussed in Section 2, "Data Abstraction", which is to prevent changes in one place from affecting a large scope. The program's output is as follows:

~~~
$ ./a.out
value how many
0 10130
1 10072
2 9990
3 9842
4 10174
5 9930
6 10059
7 9954
8 9891
9 9958
~~~

The occurrences of each number are around 10,000 times, indicating a fairly
uniform distribution.  (Paul: in a probability perspective, the "randomness" is also means the next element is independent of the last element, but we clearly haven't tested this).

## Exercises

1. How should the expression be written to generate random integers between
   [10, 20] using the `rand` function?

## 3. Array Application Example: Histogram

Continuing from the previous example, we will now count the number of occurrences of random numbers between 0 and 9, and print the result as a histogram. A histogram is a graphical representation of the distribution of numerical data. Sometimes, we not only want to print the result, but also want to save the result for further processing. We can modify the program as follows:

~~~c
int main(void)
{
	int howmanyones = howmany(1);
	int howmanytwos = howmany(2);
	...
}
~~~

This is obviously too cumbersome. What if there were 100 random numbers? Obviously, an array is the most suitable solution:

~~~c
int main(void)
{
	int i, histogram[10];

	gen_random(10);
	for (i = 0; i < 10; i++)
		histogram[i] = howmany(i);
	...
}
~~~

Interestingly, the loop variable `i` has two purposes here. First, it is passed as a parameter to the `howmany` function to count the number of occurrences of the number `i`. Second, it is used as the index of histogram, which means "save the number of occurrences of the number `i` in the `i`th position of the array histogram".

Although the above method can accurately obtain the statistical results, the efficiency is very low. These 100,000 random numbers need to be checked ten times from beginning to end, and each check only counts the number of occurrences of one number. In fact, the elements in histogram can be used as accumulators. These random numbers only need to be checked once from beginning to end (Single Pass) to obtain the result:

~~~c
int main(void)
{
	int i, histogram[10] = {0};

	gen_random(10);
	for (i = 0; i < N; i++)
		histogram[a[i]]++;
	...
}
~~~

First, all elements of histogram are initialized to `0`. Note that the value of a local variable must be initialized before it is used, otherwise the value is undefined. In each iteration of the loop, `a[i]` is the random number that appears, and this random number is also the index of histogram. Each time this random number appears, the corresponding element in histogram is incremented by 1.

If you run the above program several times, you will find that the random numbers generated each time are the same. Moreover, the random numbers generated by running this program on other computers are likely to be the same. This shows that these numbers are pseudo-random numbers, which are calculated based on a set of deterministic formulas based on some initial values. As long as the initial values are the same, the entire sequence of subsequent numbers is the same. In practical applications, it is impossible to use the same random numbers every time. For example, when developing a mahjong game, the tiles drawn each time the game is run should not be the same. Therefore, the C standard library allows us to specify an initial value ourselves, and then generate pseudo-random numbers based on this value. This initial value is called a Seed, and can be specified using the `srand` function. Usually, we obtain an uncertain number as the Seed through other means, such as calling the time function to obtain the number of seconds from the current system time to 00:00:00 on January 1, 1970 [Note 18], and then pass it to `srand`:

~~~c
srand(time(NULL));
~~~

Then call rand to get a random number, which is completely different from the one just now. The time function needs to include the header file `time.h`. Here, `NULL` represents a null pointer, which will be explained in detail in [Section 1 "Basic Concepts of Pointers"](ch23s01.html#pointer.intro).

## Exercises

1. Complete the main function of the histogram program in this section to print the histogram in a visual form. For example, the result of counting 20 random numbers is:

~~~
0  1  2  3  4  5  6  7  8  9

*  *  *  *     *  *  *     *
*     *  *     *  *  *     *
      *  *        *
                  *
                  *
~~~

2. Define an array and to print its full permutation. For example, if we define:
```c
#define N 3
int a[N] = { 1, 2, 3 };
```
then the result should be 
```
$ ./a.out
1 2 3 
1 3 2 
2 1 3 
2 3 1 
3 2 1 
3 1 2 
1 2 3
```

The given code block describes the recursive process of generating permutations of a sequence. The idea is to swap the first element with itself, then generate permutations of the remaining elements. Then swap the second element with itself, and generate permutations of the remaining elements, and so on. This process is recursive, and the base case is not described in the code block.

The main idea is 
1. Put 1 in the front (which it has already been).  Then permute `2` and `3` in the same manner. 
2. Put 2 in the front, ...
3. Put 3 in the front, ...

This is a recursive procedure.  We reduce the problem of permuting a sequence into permuting its subsequences.  Note that I did not mention how to handle the base case(s), so you need to figure it out.  Your program should be able to run correctly, even if I change the length of `a`.

After you finish the first part, we may consider another question: how should we modify the program if we want to permute `M` elements out of the `N` elements, where `M <= N` and both are constants? 

Now consider the third question: what should we do if we want to find combinations `C(N, M)`, instead of permutations `P(N, M)`?


- [Note 18]:  Most UNIX-based and -compatible OSs called this moment "epoch", because UNIX was invented in 1969. 


## 4. Zero terminated strings

Previously, I avoided discussing strings in detail, but now that you have the necessary foundational knowledge, we can delve deeper into the topic. A string can be thought of as an array, with each element being of type `char`. For example, the string `"Hello, world.\n"` can be represented as follows:

![String Array](images/array.string.png)

Note that each character is followed by a terminating character `'\0'`. Here, `'\0'` is the octal representation of the ASCII code 0, which is the Null character. In C, this type of string is also known as a Null-terminated string. Array elements can be accessed using the array name and index, and string literals can also be used like array names, allowing access to individual characters:

```c
char c = "Hello, world.\n"[0];
```

However, modifying characters (in this case) using an index is not allowed:
```c
"Hello, world.\n"[0] = 'A';
```

This line of code will produce a compilation error, stating that the string literal is read-only and cannot be modified . String literals are also similar to array names in that they are automatically converted to a pointer to the first element when used as an rvalue. In Section 3.3 _Parameters and Arguments_, we saw that the first parameter of the `printf` prototype is a pointer type, and `printf("hello world")` is actually passing a pointer parameter to `printf`.

Previously, we learned that arrays can be initialized like structures. If it is a character array, it can also be initialized with a string literal:

```c
char str[10] = "Hello";
```

This is equivalent to:

```c
char str[10] = { 'H', 'e', 'l', 'l', 'o', '\0' };
```

The last four elements of `str` are not specified and are automatically initialized to 0, which is the Null character. Note that although the string literal `"Hello"` is read-only, the array `str` initialized with it is both readable and writable. The array `str` contains a string of characters, terminated by `'\0'`, which can also be called a string. In this book, any string of characters terminated by a Null character is called a string, whether it is an array like `str` or a string literal like `"Hello"`. 

If the string literal used to initialize the array is longer than the array itself, the compiler will issue a warning. For example, the following code will only include the first 10 characters of the string `"Hello, world.\n"`:

```c
char str[10] = "Hello, world.\n";
```

To avoid this warning, you can omit the size of the array and let the compiler calculate it automatically:

```c
char str[] = "Hello, world.\n";
```

In this case, the length of the array will be determined by the length of the string literal, including the null terminator.  (In this case, the length is 15). 

It is important to note that if the string literal used to initialize the array is exactly one character longer than the array itself, the null terminator will be omitted and the compiler will not issue a warning. For example, the following code will not include a null terminator:

```c
char str[14] = "Hello, world.\n";
```

This can lead to unexpected behavior and should be avoided.  According to [C99 Rationale], this was for the convenience of programmers (who write compilers), as many old compilers were implemented in this way). 

Finally, it is worth noting that the `printf` function can be used to print strings using the `%s` formatter. . 
Before we learnt array of characters, this syntax made no sense: 
```c
// Why writing this
printf("string: %s\n", "Hello");
// If you can write this: 
printf("string: Hello\n");
```

Now you can store a string in a variable array, the `%s` formatter becomes important. 
For example:
```c
char str[] = "Hello, world.\n";
printf("string: %s\n", str);
```

This will print the string `"Hello, world."` followed by a newline character. However, if the string does not include a null terminator, `printf` will continue reading memory until it encounters one, which can lead to undefined behavior, e.g. sometimes printing rubbish, sometimes execute without any issue, and sometimes cause SegFault. 

Paul's final comment:  Why not just `printf(str)`?  The C standard specifies the first argument to `printf` must be a _string constant_, i.e. a string determined at compilation time; otherwise the behaviour would be undefined.  This is for giving power to compilers to prevent the following scenario: 

```c
char s[BUF_SIZE];
scanf("%s", s);
printf(s);
```
What's the problem?  A malicious user [also (mistakenly) known as a hacker] can input `%x%x%x%x%x%x%x`, which can print some of the stack. 




## 5. Multi-dimensional Array

Just like structures can be nested, arrays can also be nested. An array's element can be another array, forming a multi-dimensional array. For example, you can define and initialize a two-dimensional array like this:

```c
int a[3][2] = { 1, 2, 3, 4, 5 };
```


The array `a` has 3 elements: `a[0]`, `a[1]`, and `a[2]`. Each element is also an array. For example, `a[0]` is an array with two elements: `a[0][0]` and `a[0][1]`, both of which are of type `int` and have the values 1 and 2, respectively. Similarly, `a[1]` has the values 3 and 4, and `a[2]` has the value 5 and 0. This can be visualized as below: 

We can also initialize multi-dimensional arrays using nested initializers, like so:

```
Conceptual model: 
    0 1
  +-----
0 | 1 2
1 | 3 4
2 | 5 0


Physical model: 
1 2 3 4 5 0
```

From a conceptual point of view, this two-dimensional array is a table with three rows and two columns, where the two indices of an element represent the row and column numbers. From a physical point of view, these six elements are still stored continuously in memory, just like a one-dimensional array. This storage method is called row-major, where the elements of a row are stored together. Some programming languages, such as FORTRAN, store elements column-wise, which is called column-major.

Multi-dimensional arrays can also be initialized using nested initializers, just like nested structures. For example, the above two-dimensional array can also be initialized as follows:

```c
int a[][2] = { {1, 2}, {3, 4}, {5} };
```

Note that the length of the first dimension can be automatically calculated by the compiler, but the lengths of all other dimensions must be explicitly specified. Using C99's new feature, we can also do member-wise initialization, as shown below:

```c
int a[3][2] = { [0][1] = 9, [2][1] = 8 };
```

Arrays of structures and structures containing arrays may also be memberwise initialized using similar syntax: 

```c
struct complex_struct {
	double x, y;
} a[4] = { [0].x = 8.0 };

struct {
	double x, y;
	int count[4];
} s = { .count[2] = 9 };
```

If we have a multi-dimensional character array, we can also use string literals as initializers, as shown below:
```c
#include <stdio.h>

void print_day(int day)
{
	char days[8][10] = { "", "Monday", "Tuesday",
			     "Wednesday", "Thursday", "Friday",
			     "Saturday", "Sunday" };

	if (day < 1 || day > 7)
		printf("Illegal day number!\n");
	printf("%s\n", days[day]);
}

int main(void)
{
	print_day(2);
	return 0;
}
```

As demonstrated below: 

![Multi-dimensional array](images/array.multichar.png)

In this program, we define a multi-dimensional character array `char days[8][10]`. To make 1-7 correspond to `days[1]-days[7]`, we leave `days[0]` unused, so the length of the first dimension is 8. To make the longest string "Wednesday" fit into one line and leave room for a null character at the end, the length of the second dimension is 10.

This program actually does the same thing as Example 4.1 (In Sec4.4 _switch statement_),
but the code is much more concise. Concise code is not only highly readable,
but also has low maintenance cost. In Example 4.1, there
are a bunch of `case`, `printf` and `break`. If a `break` is omitted, a bug will occur.
The simplicity of this program comes from replacing code with data.
Specifically, accessing an array composed of strings through subscripts can
replace a bunch of case branch judgments, so that the repeated code (`printf`
call) in each case can be extracted, thus achieving "extracting the common
factor" again. This method is called data-driven programming. The most
important thing in writing code is to choose the correct data structure to
organize information. Designing the control process and algorithm is the second. As
long as the data structure is selected correctly, other codes will come
naturally. It becomes easy to understand and maintain, just like the `printf`
here is naturally extracted. [Mythical Man-Month] said: "Show me your
flowcharts and conceal your tables, and I shall continue to be mystified. Show
me your tables, and I won't usually need your flowcharts; they'll be obvious."
(Paul: Indeed, flowchart is now consider a very smelly tool in "software design").

Finally, let's write a simple game of rock-paper-scissors using the knowledge from this chapter:

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void)
{
	char gesture[3][10] = { "scissor", "stone", "cloth" };
	int man, computer, result, ret;

	srand(time(NULL));
	while (1) {
		computer = rand() % 3;
	  	printf("\nInput your gesture (0-scissor 1-stone 2-cloth):\n");
		ret = scanf("%d", &man);
	  	if (ret != 1 || man < 0 || man > 2) {
			printf("Invalid input! Please input 0, 1 or 2.\n");
			continue;
		}
		printf("Your gesture: %s\tComputer's gesture: %s\n", 
			gesture[man], gesture[computer]);

		result = (man - computer + 4) % 3 - 1;
		if (result > 0)
			printf("You win!\n");
		else if (result == 0)
			printf("Draw!\n");
		else
			printf("You lose!\n");
	}
	return 0;
}
```

The three integers 0, 1, and 2 are the internal representations of rock-paper-scissors in the program, and the user is also required to input 0, 1, or 2, and then compete with the 0, 1, or 2 randomly generated by the computer. The main body of this program is an endless loop, you need to press Ctrl-C to exit the program. In the past, the programs we wrote only had printouts. In this program, we encountered the situation of processing user input for the first time. Let's briefly introduce the usage of the `scanf` function, and explain it in detail in Chapter 25 Section 2.9 "Format I/O Functions". The function of `scanf("%d", &man)` is to wait for the user to input an integer and press Enter. This integer will be saved in the integer variable `man` by the `scanf` function. If the user input is legal (the input is indeed a number and not other characters), the `scanf` function returns 1, indicating that a data has been successfully read. But even if the user enters an integer, we need to further check whether it is in the range of 0~2. When writing a program, we must be careful about user input. The user may enter any data, and he does not care what the rules of the game are.

Similar to `printf`, `scanf` can also use conversion instructions such as `%c`, `%f`, `%s`, etc. If you use `%d`, `%f` or `%c` in the first parameter passed to `scanf` to read an integer, floating-point number or character, respectively.  The form of the second parameter should be `&` operator plus the variable name of the corresponding type, indicating that the read-in number is saved in this variable, and the function of the `&` operator is to obtain a pointer type, which will be explained in detail in Chapter 23 Section 1 "Basic Concepts of Pointers"; In the first parameter, `%s` is used to read a string, then the second parameter should be the array name, and `&` is not added in front of the array name, because the array type is automatically converted into a pointer type when it is an rvalue. Chapter 10 Section 2 "Breakpoints" has an example of `scanf` reading a string.

The question left for readers to think about is: how does the magical expression `(man - computer + 4) % 3 - 1` compare the three numbers 0, 1, and 2 in the sense of "rock-paper-scissors" ?

# Chapter 15 Data types

## 0. Preliminary: Implementation-defined, Unspecified and Undefined

In the C standard, areas that are not explicitly specified are expressed using the terms "implementation-defined," "unspecified," or "undefined." In this book, these three cases are sometimes collectively referred to as "not clearly defined."

We shall see an example of an implementation-defined situation in the next section. The C standard does not explicitly state whether `char` is `signed` or `unsigned`, but it requires the compiler to make a clear specification and document it in the compiler's documentation.

On the other hand, in the case of Unspecified, there are often multiple possible ways to handle the situation. The C standard does not specify a particular approach, allowing the compiler to make its own decision without the need for documentation. Consequently, even different versions of the same compiler may yield different results since the compiler does not explicitly define how it should handle such cases. For instance, in the upcoming chapter, we will discuss the evaluation order of function call arguments, which falls under the category of Unspecified.

Undefined situations, however, are entirely unpredictable. The C standard does not provide any guidance on how to handle them, and the compiler may not have any specific instructions or error-handling mechanisms in place. Many instances of undefined behavior cannot be detected by the compiler and can ultimately result in runtime errors. An example of this is accessing an array beyond its bounds, which is considered undefined behavior.

For beginners, encountering these rules can often feel uncomfortable, as if they are deciphering legal provisions rather than learning programming. This can be disheartening. It is true that the C language is not as flawless as mathematical theorems. The real world is never perfectly ideal. However, C programmers are fortunate in their own right. By strictly adhering to the C standard when writing code and avoiding those murky areas, they can achieve code that is highly portable.

Let's take a moment to consider the plight of JavaScript programmers. They do not even have a standard to follow. Each web browser behaves differently, and even different versions of the same browser can exhibit significant differences. Consequently, programmers are compelled to write distinct code for each browser and its various versions.

Paul: Well, JavaScript programmers are in some ways less miserable than 10 years ago, as new browsers generally comfort ECMAScript standards.  However, JS programmers' dependency on constantly and rapidly changing frameworks create other problems. 
Paul: A series of three very well-written article (by LLVM's developers) about undefined behaviour is available at [here](https://blog.llvm.org/2011/05/what-every-c-programmer-should-know.html). 

<!--
```md
Please translate contents below (which is a textbook section) to English.  
Make sure the grammar is correct and use classroom tones, as far as possible.  You may change the order of words and sentences or modify a few phases, if this will make the document easier to read.  

Quote in-line C code with a pair of "`"  

All HTML tags that are convertible to Markdown should be converted.  Replace all occurrences of "`" in the markdown code you generated by "~".   Do no parapharse. 

Please translate this file (which is a textbook section) to markdown, while translating it to English.  
Quote in-line C code with a pair of "`"  Make sure the grammar is correct and use classroom tones, as far as possible.  You may change the order of words and sentences or modify a few phases, if this will make the document easier to read.  All HTML tags that are convertible to Markdown should be converted.  Replace all occurrences of "`" in the markdown code you generated by "~".   Do no parapharse. 
```
-->
## 1. Integer types

We know that in the C language, the `char` type occupies one byte of storage space, and one byte is typically composed of 8 bits. If these 8 bits are interpreted as an unsigned integer, the range of values is 0 to 255. If interpreted as a signed integer using 2's complement representation, the range of values is -128 to 127. The C language defines two keywords, `signed` and `unsigned`. `unsigned char` represents an unsigned number, while `signed char` represents a signed number.

So, what about the char type that we used to commonly use without the signed or unsigned keywords? According to the C standard, this is implementation-defined. The compiler can define `char` as either unsigned or signed. The choice of implementation depends on the efficiency of the implementation on the corresponding architecture supported by the compiler. For example, on the x86 platform, gcc defines char as `signed`. This is also one of the rationales behind the C standard: prioritizing efficiency over portability. This requires programmers to have a clear understanding of these rules. If you intend to write portable code, you must be aware of which coding practices are not portable and should be avoided.

On the other hand, writing non-portable code is sometimes necessary. For example, the Linux kernel code utilizes many syntax features supported only by gcc to achieve optimal performance. When writing such code, there is no intention to compile it with other compilers, and portability is not a concern. If you want to write non-portable code, you must also understand which parts of the code are not portable and why they are written that way. Unless it is for the sake of efficiency, there is generally no reason to intentionally write non-portable code.

From now on, we will encounter many features that are implementation-defined. The C language is closely tied to the platform and compiler. Without discussing specific platforms and compilers, we can only cover the content of the first part of this book. It is worth noting that the ASCII character set ranges from 0 to 127. Therefore, regardless of whether char is signed or unsigned, storing an ASCII code in a char variable poses no issues. Generally, when using char to represent ASCII characters, there is no need to explicitly specify whether it is signed or unsigned. However, if char is used to represent an 8-bit integer for the sake of portability, it is necessary to specify whether it is signed or unsigned.

In addition to the char type, the integer types include `short int` (or simply `short`), `int`, `long int` (or simply `long`), and `long long int` (or simply `long long`) [Note 24]. These types can be accompanied by the `signed` or `unsigned` keywords to indicate signed or unsigned numbers. In fact, the C standard does not explicitly specify whether signed numbers should be represented in sign and magnitude, 1's complement, or 2's complement in computer systems. It is also implementation-defined. Most architectures, including the x86 platform, use 2's complement representation. From now on, we will only discuss the case of 2's Complement representation.

Another point to note is that for these types other than char, if the `signed` or `unsigned` keyword is not explicitly specified, they are considered signed. This is a clear specification in the C standard and not implementation defined.

Apart from the explicit specification that char occupies one byte in the C standard, the number of bytes occupied by other integer types is implementation-defined. Typically, compiler implementations adhere to the ILP32 or LP64 specifications, as shown in the following table.

| Type | ILP32 (bits) | LP64 (bits) |
| :-: | -: | -: |
| `char` | 8 | 8 |
| `short` | 16 | 16 |
| `int` | 32 | 32 |
| `long` | 32 | 64 |
| `long long` | 64 | 64 |
| Pointers | 32 | 64 |

The abbreviation ILP32 stands for "`int`," "`long`," and "pointer," all of which occupy 32 bits. This specification is commonly used by C compilers on 32-bit computers, including the GCC compiler on the x86 platform and when using x32 ABI. On the other hand, LP64 refers to "`long`" and "pointer" types occupying 64 bits. This specification is typically used by C compilers on 64-bit computers. The length of pointer types always matches the computer's bitness. As for what the computer's bitness represents and the nature of pointer types, we will provide detailed explanations in Chapter 17 on computer architecture basics and Chapter 23 on pointers. From now on, let's make the following agreement in this book: in subsequent statements, the default platform is assumed to be x86/Linux/gcc (Paul: I will also provide x86-64/Linux/gcc's explanation along sides), following the ILP32 (Paul: for x86, LP64) convention, with `char` being signed. I won't explicitly mention this every time, but when discussing other platforms, I will explicitly state which platform is being referred to.

Since C99, a header file `stdint` is given, which provides information for limited cross-platform compatibility supports.  [Note A]
The file defined types with the names `intN_t, int_fastN_t, int_leastN_t, uintN_t, uint_fastN_t`, where `N` is an integer, denoting the length of the integer type.  Typically, it is defined for `N ==` 8. 16. 32 and 64.  For example, on x86, `uint32_t` is the same as `unsigned int`. 

There are also four types called `intmax_t, intptr_t, uintmax_t, uintptr_t`. 
Although some developers (especially developers of embedded systems) usually cast pointers to and from integer types, the behaviour is actually implementation-defined (and if the resulting integer from a casting a pointer cannot be held in the resulting type, the behaviour is undefined), unless you use `intptr_t` or `uintptr_t`. 
[Note B]

In Chapter 2 Section 2.2 "Constants", we discussed that C language has four types of constants: integer constants, character constants, enumeration constants, and floating-point constants. In fact, the types of character constants and enumeration constants are both integers, so the types of the first three constants are all integers. There are many types of integer constants, not all of which are of the type `int`. We will discuss integer constants in detail below.

Previously, we only used decimal integer constants. In fact, octal and hexadecimal integer constants can also be used in C language. Octal integer constants start with 0, and the following digits can only be 0 to 7. Therefore, decimal integer constants cannot start with 0, otherwise they cannot be distinguished from octal. Hexadecimal integer constants start with 0x or 0X, and the following digits can be 0 to 9, a to f, and A to F. In Section 2.6 "Character Types and Character Encoding", we discussed an escape sequence that represents octal or hexadecimal digits with `\` or `\x`. This representation is equivalent to replacing the 0 at the beginning of octal and hexadecimal integer constants with `\`. [Note 26]

Although it might be obvious to some readers, we still want to emphasis that, regardless of which representation of constants you choose, the compiler regards them as the same, i.e. `31` and `037` and `0x1f` are regarded as having the same type and the same value. 

Integer constants can also be followed by `u` or `U` to indicate "`unsigned`", `l` or `L` to indicate "`long`", and `ll` or `LL` to indicate "`long long`", such as `0x1234U`, `98765ULL`, etc. However, in fact, these suffixes `u`, `l`, and `ll` and the keywords `unsigned`, `long`, and `long long` are not one-to-one correspondences. This correspondence is more complicated, and the accurate description is shown in the following table (from Clause 6.4.4.1 of [C99]).

| Suffix | Decimal Constant | Octal or Hexadecimal Constant |
|--------|-----------------|-------------------------------|
| None   | int<br>long int<br>long long int | int<br>unsigned int<br>long int<br>unsigned long int<br>long long int<br>unsigned long long int |
| u or U | unsigned int<br>unsigned long int<br>unsigned long long int | unsigned int<br>unsigned long int<br>unsigned long long int |
| l or L | long int<br>long long int | long int<br>unsigned long int<br>long long int<br>unsigned long long int |
| u or U and l or L | unsigned long int<br>unsigned long long int | unsigned long int<br>unsigned long long int |
| ll or LL | long long int | long long int<br>unsigned long long int |
| u or U and ll or LL | unsigned long long int | unsigned long long int |

Given an integer constant, such as `1234U`, it should belong to the "Decimal Constant" column of the "`u` or `U`" row in this table. Find the first type that is long enough to represent the number 1234 from top to bottom in this table cell. Then it is the type of this integer constant. If int is 32 bits, unsigned int can represent 1234.

For example, `0xffff0000` should belong to the "Octal or Hexadecimal Constant" column of the "None" row. This column has six types: `int, unsigned int, long int, unsigned long int, long long int`, and `unsigned long long int`. The first type int cannot represent the number `0xffff0000`, and we write this hexadecimal constant to represent a positive number, and its MSB (the 31st bit) is 1. If it is interpreted according to the signed int type, it becomes a negative number. The second type `unsigned int` can represent this number, so the type of this hexadecimal constant should be unsigned int. Therefore, please note that although the two constants `0x7fffffff` and `0xffff0000` look similar, the former is of type `int`, and the latter is of type `unsigned int`.

Let's discuss an interesting problem. We know that the range of int on the x86 platform is -2147483648 to 2147483647. Is there any problem with printing the lower bound of int with `printf("%d\n", -2147483648);`? If compiled with `gcc main.c -std=c99`, there will be a warning message: `warning: format ‘%d’ expects type ‘int’, but argument 2 has type ‘long long int’` (or `long` on x64 machines)
This is because although -2147483648 can be represented by the int type, it cannot be written as an int constant in C language. The C compiler will treat it as an integer constant 2147483648 and a negative sign operator, which forms an expression of type `long long` (or `long` on x64).  However, the `%d` in `printf`'s formatting string specifies that the type of the first argument should be `int`, which triggers a warning.  If we modify the statement to `printf("%d\n", -2147483647-1);`, the compiler will be happy again.  Why?  Negating `2147483647` gives an `int`, and since both `-2147483647` and `1` are int, the result is also an `int` (and its value is still within `int`'s range). 

You see?  Integer constants are not as simple as you might have initially thought. Let's take a look at another complex issue. Consider the following code: `long long i = 1234567890 * 1234567890;` During compilation, you will receive a warning message: `warning: integer overflow in expression`. The constant `1234567890` is of type `int`, and when two `int` values are multiplied, the resulting expression is still of type `int`. However, the product exceeds the range of values that can be represented by an `int`, hence the warning about the overflow.

To resolve this issue, you can modify the code as follows: `long long i = 1234567890LL * 1234567890;` In this case, one of the constants is of type `long long`, and the other constant is automatically converted to `long long` before the multiplication operation. The expression representing the multiplication of the two numbers will also be of type long long. As a result, the compiler will not issue any warnings.  Alternatively (and arguably more preferably), we can use fixed-length integers: 
```c
#include <stdint.h>

...

	int64_t j = INT64_C(1234567890) * INT64_C(1234567890);
```

The rules regarding type conversions will be explained in detail in Section 3, "Type Conversions."

- [Note 24]: We shall learn another special integer type, called bit-field, in Chapter 19 Section 4 "Struct and Union". 
- [Note 25]: Some compilers (e.g. gcc) supports binary integer constants, whose prefixes are `0b` or `0B`, e.g. `0b0001111`.  Still, this is an extension done by some compilers, and is _not a part of the C standard_.  It is advisable not to octal or hexadecimal numbers, since there is a rather obvious relation from octal and hexadecimal numbers to binary numbers. 
- [Note A]: some descriptions about `stdint` are taken from <https://en.cppreference.com/w/c/types/integer>, which is also licensed under GFDL. 
- [Note B]: `((void *) 0)` is always the null pointer, and it is expected to not pointing at anything.  So if there is something stored at the address 0x0 (like in some embedded systems), you would probably want to use inline assembly to access it instead.  [C11 6.3.2.3.3]

```
PATH="${PATH}:/opt/stm32cubeide/plugins/com.st.stm32cube.ide.mcu.externaltools.gnu-tools-for-stm32.10.3-2021.10.linux64_1.0.200.202301161003/tools/bin/"
```
## 2. Floating-point types

The C standard defines three floating-point types: `float`, `double`, and `long double`. Similar to integer types, the standard does not specify the size of each type in bytes or the representation format to be used. The implementation of floating-point numbers varies significantly across platforms. Some processors have a dedicated floating-point unit (FPU), known as a hard-float implementation, while others lack an FPU and can only perform integer operations, requiring software emulation of floating-point operations, known as a soft-float implementation.

Most platforms adhere to the IEEE 754 standard for floating-point representation. Typically, `float` is 32 bits and `double` is 64 bits. The `long double` type usually offers higher precision than `double`, but its implementation varies greatly among platforms. On x86 platforms, most compilers implement long double as 80 bits because x86's FPU has 80-bit precision. However, gcc implements `long double` as 12 bytes (96 bits) (16 bytes or 128 bits on x64) to align it on a 4-byte boundary (alignment is discussed in detail in Chapter 19 Section 4, "Structures and Unions"). Some compilers implement long double with the same precision as double, not fully utilizing the precision of the x86 FPU. The precision of the floating-point unit and the implementation of `long double` may differ on other architectures. For example, on PowerPC, long double is typically 128 bits.

Previously, we only used simple floating-point constants [Note A] like 3.14. Now, let's explore other ways to represent floating-point constants. Since floating-point numbers are based on scientific notation in computers, floating-point constants can also be written in scientific notation with the mantissa and exponent separated by 'e' or 'E'. For example, `314e-2` represents 314 × 10^(-2). It's important to note that this representation uses base 10. If there are no digits to the left or right of the decimal point in the mantissa, it is considered to be zero. For instance, `3.e-1`, `.987`, and so on. Floating-point constants can also have a suffix. For example, `3.14f` and `.01L`. The correspondence between the suffix and the type of the floating-point constant is straightforward. A floating-point constant without a suffix is of type double. A floating-point constant with the suffix 'f' or 'F' is of type float, and a floating-point constant with the suffix 'l' or 'L' is of type long double.

C99 introduces a new format of floating-point constant, named
_hexadecimal-floating-point constant_, it is in the form `0x`_a.b_`p`_exp_,
where _a.b_ is a hexadecimal integer of fractional number.  We have introduced
how to read this number in the last chapter, we shall give a simple example
here:  Consider `0x123.45`, its value is
$1 \times 16^2 + 2 \times 16^1 + 3 \times 16^0 + 4 \times 16^{-1} + 5 \times 16^{-2}$. 
The expression _exp_ here denotes the exponent in the _power of 2_, _i.e._, if we denote _a.b_ as $A$, the resulting number is 
$A \times 2^{\text{\textit{exp}}}$.
Therefore, `0x123.45p3` equals
$\left(1 \times 16^2 + 2 \times 16^1 + 3 \times 16^0 + 4 \times 16^{-1} + 5 \times 16^{-2}\right) \times 2^3$. 
Similar to the decimal notation, you may also put `f, F, l, L` at the end of the number to indicate its accuracy. 

- [Note A]: In C11, the specification is outlined in Section 6.4.4.2, and the term used is "floating constant". 
## 3. Type conversion

If someone asks me which part of the C syntax rules is the most complex, I would definitely say it's type conversion. As we can see from the previous two sections, there are numerous types of signed and unsigned integers, as well as floating-point numbers. Between every two types, a conversion rule must be defined. Naturally, the number of conversion rules is quite large. Moreover, due to the different implementations of integers and floating-point numbers in various architectures, many cases of type conversion remain in the dark corners that are not explicitly specified by the C standard. Although we don't intentionally touch these dark corners when writing code, we may accidentally make mistakes. Therefore, it is necessary to have some understanding of these unspecified situations to facilitate error analysis when mistakes occur.

This section is divided into several subsections. First, we will introduce the situations in which type conversion occurs and which types are converted into what types. Then, we will discuss how the compiler handles such type conversions.

### 3.1. Integer Promotion

In an expression, wherever an `int` or `unsigned int` type can be used as an rvalue, we may use signed or unsigned `char`, `short`, and bit-field types as the rvalue. If the value range of the original type can be represented by the `int` type, then its type is promoted to `int`. If the value range of the original type cannot be represented by the int type, then it is promoted to `unsigned int`. This process is known as integer promotion. Integer promotion only affects the values of the aforementioned types and has no impact on other types. The C99 standard specifies that integer promotion applies to the following cases:


1. If __the parameter type of a function is unknown__, for example, when using old style C function declaration (see Chapter 3 Section 2 "User-Defined Functions") or when the function's parameter list contains "`...`", the corresponding arguments must undergo integer promotion when calling the function. Additionally, if the corresponding argument is of type `float`, it must be promoted to `double`. This rule is known as _default argument promotion_. We know that the `printf` function has "`...`" in its parameter list, and except for the first parameter, the types of the remaining parameters are unknown. For example, consider the following code:
```c
char ch = 'A';
printf("%c", ch);
```
The variable `ch` needs to be promoted to int before being passed to `printf`.
2. __Type conversion in arithmetic operations__. Signed or unsigned `char`, `short`, and bit-field types need to undergo integer promotion before participating in arithmetic operations. For example:
```c
unsigned char c1 = 255, c2 = 2;
int n = c1 + c2;
```

The process of evaluating the expression `c1 + c2` involves first promoting `c1` and `c2` to int and then performing addition (the value range of `unsigned char` is `0` to `255`, which can be fully represented by `int`, so promoting to int is sufficient, and there is no need to promote to `unsigned int`). The entire expression has the type `int`, and the final result is `257`. If this promotion process did not occur, `c1 + c2` would "overflow" [Note A]. On basically all platforms, the result would be 1.

What other operators require integer promotion before evaluation? We will first introduce the rules of usual arithmetic conversion in the next subsection, and then answer this question.

### 3.2. Usual Arithmetic Conversion

When performing arithmetic operations between two arithmetic types, such as `a + b`, if the types of the operands on both sides are different, the compiler automatically performs type conversion to make the types the same before performing the operation. This process is called usual arithmetic conversion. The conversion rules are as follows:

1. If one side of the expression has the type "`long double`," then the other side is also converted to "`long double`."
2. Otherwise, if one side has the type "`double`," then the other side is converted to "`double`."
3. Otherwise, if one side has the type "`float`," then the other side is converted to "`float`."
4. Otherwise, both sides are integers. First, follow the rules of integer promotion discussed in the previous subsection for types "`a`" and "`b`." If the types are still different, further conversion is required. We define the conversion ranks (_integer conversion rank_) for `char`, `short`, `int`, `long` and `long long` with each having a higher rank than the previous one. Signed and unsigned numbers of the same type have the same rank. The conversion rules are as follows:
    1. If both sides are signed numbers or both sides are unsigned numbers, the type with the lower rank is converted to the type with the higher rank. For example, when performing arithmetic operations with "`unsigned int`" and "`unsigned long`," both are converted to "unsigned long."
    2. Otherwise, if one side is an unsigned number and the other side is a signed number, and the rank of the unsigned number is not lower than the rank of the signed number, then the signed number is converted to the unsigned type of the other side. For example, when performing arithmetic operations with "`unsigned long`" and "`int`," both are converted to "`unsigned long`." The same applies to "`unsigned long`" and "`long`."
    3. The remaining case is when one side is signed and the other side is unsigned, and the rank of the unsigned number is lower than the rank of the signed number. In this case, there are two possibilities. If the signed number type can cover the value range of the unsigned number type, then the unsigned number is converted to the signed type of the other side. For example, on platforms following the LP64 convention, "`unsigned int`" and "`long`" are both converted to "long" when performing arithmetic operations.
    4. Otherwise, if the signed number type is not sufficient to cover the value range of the unsigned number type, both sides are converted to the unsigned type corresponding to the rank of the signed number. For example, on platforms following the ILP32 convention, "`unsigned int`" and "`long`" are both converted to "unsigned long" when performing arithmetic operations.

It can be seen that the conversion rules for signed and unsigned integers are quite complex. Although there are clear specifications for these rules and they are not in obscure corners, it is not advisable to rely on these rules when writing code for the sake of program readability. I explain these rules not for you to use them directly, but for you to understand that mixing signed and unsigned numbers can be very troublesome, and to avoid touching these rules and remember to refer to them when there are errors in the program. So, you don't need to memorize these rules, but you should know that they exist so that you can refer to this section in my book when needed.

So far, we have learned about the `+, -, *, /, %, >, <, >=, <=, ==`, and `!=` operators, all of which require usual arithmetic conversion because they require both operands to have the same type. In the next chapter, we will introduce several new operators that also require usual arithmetic conversion. The unary operators `+`, `-`, and `~` have only one operand, and the shift operators `<<` and `>>` do not require the operands on both sides to have the same type. These operations do not require usual arithmetic conversion, but they still need integer promotion. The operators `~`, `<<`, and `>>` will be discussed in the next chapter.


### 3.3. Type Conversion Caused by Assignment

If the types on both sides of an assignment or initialization are not the same, the compiler will convert the type on the right side to the type on the left side before assigning it. For example, `int c = 3.14;` will cause the compiler to convert the `double` type on the right side to an int type before assigning it to the variable `c`.

We know that the process of passing parameters in a function call is equivalent to defining formal parameters and initializing them with actual arguments, and the process of returning a function is equivalent to defining a temporary variable and initializing it with the expression of return. Therefore, the type conversion caused by assignment also applies to these two cases. For example, if a function prototype is int `foo(int, int);`, calling `foo(3.1, 4.2)` will automatically convert the two `double` type actual arguments to `int` type and assign them to the formal parameters. If there is a return statement in the function definition, such as return `1.2;`, the return value `1.2` will be automatically converted to an int type before returning.

The type conversion that occurs during function calls and returns is often overlooked because the function prototype and function call are not written together. For example, `char c = getchar();` often mistakenly assumes that the return value of `getchar` is of type `char`, but in fact, the return value of `getchar` is of type `int`, which may cause type conversion and possible bugs. We will discuss this issue in detail in section 2.5 "Byte-oriented I/O Functions".

### 3.4. Casting

The above three cases are collectively referred to as implicit type conversion (or coercion), and the compiler automatically converts one type to another type according to its own set of rules. In addition to this, programmers can also use the type conversion operator (cast operator) to specify what type an expression should be converted to, which is called explicit type conversion or type casting. For example, when calculating the expression `(double)3 + i`, the compiler first force the integer `3` to be converted to a `double` type (with a value of `3.0`), and then add it to the integer variable `i`. At this point, the usual arithmetic conversion rule applies, first converting `i` to a double type, and then adding the two together. Finally, the entire expression is also of type `double`. Here, `(double)` is a type conversion operator, which consists of a type name enclosed in `()` parentheses and is a unary operator. The number `3` after it is the operand of this operator. Note that the type of the operand must be a scalar type, and the type after conversion must be a scalar type or `void` type.

Yes, you can cast a scalar type to a `void` type, but what's the point?  One application is to tell whoever reads your code (e.g. your colleague or code checker) that you did not forget the result, but you simply wanted to discard it.  This is not a very common practice in most applications, but it is important for safety-critical code [Note B].

### 3.5. How the Compiler Handles Type Conversion

The previous subsections explained the cases in which type conversion occurs and clearly stated the type that will be converted to in each case. In this section, we will discuss how the compiler handles conversions between any two types.  Suppose we want to convert an M-bit type (with a value of $X$) to an N-bit type, the C standard [C11 6.3.1.3] states that 
- For integers, 
    - if the target type can hold the value $X$, the value will be kept unchanged. 
    - Otherwise, if the target type is unsigned, the new value will be the result of module `TARGET_TYPE_MAX + 1`. 
    - Otherwise, the result is implementation-defined. 
- For floating points, if the $X$ can be represented exactly in the target range, the value is unchanged.  Otherwise, if it is within the target range, but cannot be denoted exactly, a rounded version will be stored, and the rounding method is implementation-defined.  If $X$ is outside the range, the behaviour is undefined. 
- For converting floating points to integer, $X$ is first rounded towards 0 to get the integer part.  If the target type can hold the integer part, then it will be the result.  Otherwise, the behaviour is undefined. 
- For converting integer to floating points, it is the same as converting between floating point numbers. 



Specifically, all possible cases for integer conversions are shown in the table below: 

| Conversion | $M > N$ | $M = N$ | $M < N$ |
| :- | :- | :-| :- |
| Signed integer to signed integer | If $X$'s can be represented in the target type, the value is unchanged.  Otherwise, the result is implement defined.| Value unchanged. | Value unchanged. |
| Unsigned integer to signed integer | If $X$'s can be represented in the target type, the value is unchanged.  Otherwise, the result is implement defined. | If $X$'s can be represented in the target type, the value is unchanged.  Otherwise, the result is implement defined. | Value unchanged. |
| Signed integer to unsigned integer | $X \% 2^n$ | $X \% 2^n$ | $X \% 2^n$ |
| Unsigned integer to unsigned integer | $X \% 2^n$ | Value unchanged | Value unchanged |

Note the "$X \% 2N$" in the table. I want to express the idea of "adding or subtracting multiples of $2^N$ to $X$ to make the result fall within the range $[0, 2N-1]$." When X is negative, the result of the operation must also be positive. In other words, the result should have the same sign as the divisor, not the dividend, which is different from the definition of the $\%$ operator in the C language. When writing programs, avoid intentionally using the rules in the table, especially when it comes to implementation-defined and undefined cases. However, you can refer to the table to analyze the cause of errors when your program encounters issues.

Here are some examples to illustrate the use of these rules. For instance, when converting a `double` type to a `short` type, it corresponds to the "floating-point to integer" rule. If the original value falls between `(-32769.0, 32768.0)`, the decimal part is truncated to obtain the conversion result. Otherwise, an overflow occurs, and the result is undefined. For example, for the statement "`short s = 32768.4;`", GCC will issue a warning.

Another example is converting an `int` type to an `unsigned short` type, which corresponds to the "signed integer to unsigned integer" entry in the table. If the original value is positive, it is divided by $2^{16}$ and then taken modulo, which effectively keeps only the lower 16 bits. If the original value is negative, multiples of $2^{16}$ are added to it to make the result fall within the range $[0, 65535]$.

Similarly, when converting an `int` type to a `short` type, it corresponds to the "signed integer to signed integer" entry in the table. If the original value falls within the range `[-32768, 32767]`, its value remains unchanged. Otherwise, an overflow occurs, and the result is implementation-defined. For example, for the statement "short s = -32769;", GCC will issue a warning.

In the final example, when converting a `short` type to an `int` type, it also corresponds to the "signed integer to signed integer" entry in the table. The value should remain unchanged after the conversion. How can we maintain the value? Is it sufficient to pad 16 zeros in the higher bits? If the original value is -1, its hexadecimal representation is `ffff`. To convert it to an int type and represent `-1`, it needs to become `ffffffff`. Therefore, we need to pad 16 ones in the higher bits instead of 16 zeros. In other words, maintaining the value depends on the original sign bit, and this is known as _sign extension_.

- [Note A]: The original release of Song's textbook states the overflow would result in undefined behaviour [C11 6.5 p5], but that seems to be incorrect (at least for C11).  According to [C11 6.2.5 p9], the arithmetics of unsigned integers are defined to be modulo arithmetics, so the result (assuming the range of `unsigned char` is `0-255`, would be 1. 
- [Note B]: this is the 7th rule of [_the Power of 10_](https://en.wikipedia.org/wiki/The_Power_of_10:_Rules_for_Developing_Safety-Critical_Code) rules, created by Gerard J. Holzmann for NASA. 

# Chapter 16 Operators

This chapter introduces many operators that are untouched or not formally studied before.  We then introduce an important concept called _sequence point_.  We shall summarize the precedence (priority) and associativity of all operators in the last section. 

## 1. Bitwise operations

Integers are represented in binary in computers. C language provides some operators that can directly manipulate the bits in integers, called bitwise operations. These operators must have integer operands. In later learning, you will find that some information is stored in a few bits of integers. To access these bits, operations on integers alone are not enough, and bitwise operations must be used. For example, the UTF-8 encoding introduced in [Section 2 "Unicode and UTF-8"](apas02.html#app-encoding.utf8) is like this. After learning this section, you should be able to write your own UTF-8 encoding and decoding programs. This section first introduces various bitwise operators and then introduces programming techniques related to bitwise operations.

### 1.1. Bitwise AND, OR, XOR, and NOT Operations

In [Chapter 4 Section 3 "Boolean Algebra"](ch04s03.html#cond.bool), we have discussed logical AND, OR, and NOT operations and studies their truth tables. For the bits in integers, AND, OR, and NOT operations can also be performed. C language provides bitwise AND operator `&`, bitwise OR operator `|`, and bitwise NOT operator `~`. In addition, there is a bitwise XOR operator `^`, which we have discussed in [chapter 14 Section 1 "Why Computers Use Binary Counting"](ch14s01.html#number.binary). Here are a few examples in binary form.

![Bitwise Operations](images/op.bitwise.png)

Note that the `&, |`, and `^` operators all needs usual arithmetic conversion (which includes integer promotion). The `~` operator also needs integer promotion, so there is actually no 8-bit integer bitwise operation in C language (unless you are on a computer where `int` is only 8bit, in which case, you should _really_ update your hardware).  The operands are promoted to at least `int` type before performing bitwise operations. The above examples use 8-bit integers for convenience in writing. For example, given the following code:
```c
unsigned char c = 0xfc;
unsigned int i = ~c;
```

The calculation process is as follows: the constant `0xfc` is of `int` type, and when assigned to `c`, it is converted to `unsigned char`, and the value remains unchanged. The hexadecimal representation of `c` is `0xfc`. When calculating `~c`, it is first promoted to an integer (`0x000000fc`) and then negated, resulting in `ffffff03`. Note that if you treat `~c` as the negation of an 8-bit integer, the final result would be `0x03`, which would be incorrect. To avoid errors, avoid assigning different types and carefully check each step of the calculation according to the type conversion rules discussed in the previous chapter.

### 1.2. Shift Operations

Bitwise Shift operators include left shift `<<` and right shift `>>`. Left shift moves all binary bits of an integer to the left by a certain number of bits, for example, `0xcfffffff3 << 2` results in `0x3fffffcc`:

![Left Shift Operation](images/op.shiftleft.png)

The highest two bits 11 are shifted out, and the lowest two bits are filled with two 0s, and the other bits are shifted left by two bits. However, note that the number of bits to move must be less than the total number of bits of the left operand. For example, in the above example, the left side is of unsigned int type. If the number of bits to shift is greater than or equal to 32 bits, the result is undefined. The shift operators are different from  operators like `+, -, *, /, ==`, as the types of the operands on both sides do not need to be consistent, but both operands need to perform integer promotion. The type of the entire expression is the same as the promoted type of the left operand.

Reviewing the knowledge discussed in [Chapter 14 Section 2 "Conversion between Different Radixes"](ch14s02.html#number.convert), we can conclude that _within a certain range of values, left-shifting an integer by 1 bit is equivalent to multiplying it by 2_. For example, the binary `0b11` (decimal 3) is left-shifted by one bit to become 110, which is 6, and then left-shifted by one bit to become `0b1100`, which is `12`. Readers can verify for themselves that this rule holds for signed and unsigned numbers and for negative numbers as well.  Of course, if the left shift changes the highest bit (sign bit), the result is definitely not multiplied by 2, so I added the premise "within a certain range of values"  (Paul: this is one of the reasons why C sets integer overflow as undefined). Since computers perform shift operations much faster than multiplication, compilers can use this to optimize, such as compiling i * 8 in the source code into a shift instruction instead of a multiplication instruction. 

When the operand is an unsigned number, the rules for right shift operations are similar to left shift operations. For example, `0xcfffffff3 >> 2` results in `0x33fffffc`:

![Right Shift Operation](images/op.shiftright.png)

The lowest two bits 11 are shifted out, and the highest two bits are filled with two 0s, and the other bits are shifted right by two bits. Like left shift, the number of bits to move must also be less than the total number of bits of the left operand, otherwise the result is undefined. Within a certain range of values, right-shifting an integer by 1 bit is equivalent to dividing it by 2, truncating the decimal part. 

When the operand is signed, there are two possibilities, one is fill the new bits with the same value of the sign bit (_signed right shift_), the other one is treats the number as an unsigned number (_unsigned right shift_). [Note A]  The C standard allows implementation to specify which one to use. 

Therefore, it is very inconvenient to perform bitwise operations on signed numbers, due to type conversion and right shift.  It is highly advisable to only use unsigned integer for bitwise operations. 

#### Exercises

1. Why the result for the below two `printf` statements are different?  The meaning of `%x` is to print an unsigned hexadecimal number. 

```c
int i = 0xcffffff3;
printf("%x\n", 0xcffffff3>>2);
printf("%x\n", i>>2);
```

### 1.3. Mask

When you want to operate on specific bits of an integer, you can use a mask to represent the positions of these bits in the integer. For example, the mask `0x0000ff00` represents operating on bits 8 to 15 of a 32-bit integer. Here are some examples:

1. Extract bits 8 to 15:
```c
unsigned int a, b, mask = 0x0000ff00;
a = 0x12345678;
b = (a & mask) >> 8; /* 0x00000056 */
```
You can also achieve the same effect with this code:
```c
b = (a >> 8) & ~(~0U << 8);
```
2. Clear bits 8 to 15:
```c
unsigned int a, b, mask = 0x0000ff00;
a = 0x12345678;
b = a & ~mask; /* 0x12340078 */
```
3. Set bits 8 to 15 to 1:
```c
unsigned int a, b, mask = 0x0000ff00;
a = 0x12345678;
b = a | mask; /* 0x1234ff78 */
```

#### Exercises

1. Count the number of 1s in the binary representation of an unsigned integer. The function prototype is int `countbit(unsigned int x);`.  Avoid using `if` statements. 
2. Implement unsigned integer multiplication using bitwise operations. The function prototype is `unsigned int multiply(unsigned int x, unsigned int y);`. For example, (11011)<sub>2</sub> × (10010)<sub>2</sub> = ((11011)<sub>2</sub> << 1) + ((11011)<sub>2</sub> << 4).
3. Perform a right rotation (circular right shift) on a 32-bit unsigned integer. The function prototype is `unsigned int rotate_right(unsigned int x);`. A right rotation means that the bits shifted out from the low end are added back to the high end. For example, `rotate_right(0xdeadbeef, 16)` should return `0xefdeadbe`

<!-- -->

### 1.4 XOR operator and its properties

1. XOR with itself results in 0: When a number is XORed with itself, the result is 0. If a constant 0 is needed, x86 platform compilers may generate an instruction like `xorl %eax, %eax`. No matter what the value of the `eax` register is, performing the XOR operation will result in 0. This instruction is faster than the equivalent `movl $0, %eax` instruction because the former only requires computation within the CPU, while the latter requires accessing memory. More details on this can be found in Chapter 17, Section 5 "Memory Hierarchy".
2. XOR with 0 or 1: From the XOR truth table, it can be seen that XORing with 0 keeps the original value unchanged, while XORing with 1 results in the opposite value of the original. This property can be used in combination with masks to flip certain bits, for example:
```c
unsigned int a, b, mask = 1U << 6;
a = 0x12345678;
b = a ^ mask; /* flip the 6th bit */
```
3. Parity check: If the result of a<sub>1</sub> ^ a<sub>2</sub> ^ a<sub>3</sub> ^ ... ^ a<sub>n</sub> is 1, it means that there are an odd number of 1s among a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>...a<sub>n</sub>; otherwise, there are an even number of 1s. This property can be used for parity checks, such as in serial communication, where each byte of data calculates a parity bit, and the data and parity bit are sent together. This allows the receiver to roughly determine whether the received data is erroneous based on the parity bit.
4. Swapping two variables without extra storage space: `x ^ x ^ y == y`, because `x ^ x == 0`, and `0 ^ y == y`. What is the use of this property? Let's look at this problem: swapping the values of two variables without using extra storage space, so we cannot use the `temp = a; a = b; b = temp;` method. Bitwise operations can be used to perform the swap:
```c
a = a ^ b;
b = b ^ a;
a = a ^ b;
```


#### Exercises

1. Search about RAID (Redundant Array of Independent Disks) on the Internet, and try to understand its implementation.  Some of them, e.g. RAID 5, made use of properties 3 and 4 introduced above. 

2. Swapping two variables without using extra storage space: Can you think of any other methods besides the one discussed in the previous section? The method mentioned earlier cannot swap a variable with itself. Are there any limitations to your method?


- [Note A]: If the you are familiar with Java, you might remember Java uses two different operators for right shift, `>>` is signed and `>>>` is unsigned. 

## 2. Other operators

### 2.1. Compound Assignment Operators

The compound assignment operators includes `*=`, `/=`, `%=`, `+=`, `-=`, `<<=`, `>>=`, `&=`, `^=`, and `|=`, which perform an operation and an assignment at the same time. For example, `a += 1` is equivalent to `a = a + 1`. However, there is a subtle difference between the two. The former evaluates the expression `a` only once, while the latter evaluates it twice. If `a` is a complex expression, the efficiency of evaluating it once versus twice can be different, as in `a[i+j] += 1` and `a[i+j] = a[i+j] + 1` [Note A]. Is the difference only in efficiency? For expressions without side effects, evaluating them once versus twice produces the same result. However, for expressions with side effects, such as `a[foo()] += 1` and `a[foo()] = a[foo()] + 1`, where the function call `foo()` has a side effect, such as printing a message, the former prints the message only once, while the latter prints it twice [Note B].

In the section on the `for` statement in Chapter 6, we said that `++i` is equivalent to `i = i + 1`. More accurately, it should be equivalent to `i += 1`, and the expression `i` is evaluated only once. Similarly, `--i` is equivalent to `i -= 1`.

- [Note A]: We say _can_ be different, instead of _will_ be different, because the compiler is free to _optimize_ the code (as we will see later), which will make these two totally the same. 
- [Note B]: In fact, if `foo` returns different values for the two calls, the result can be unspecified.  The reason is described in the next section. 

### 2.2. Conditional Operator

The _conditional operator_ is the only _ternary operator_ in C. It has three operands and takes the form `expression1 ? expression2 : expression3`. The value of the entire expression is equal to the value of either `expression2` or `expression3`, depending on whether `expression1` is true or false. It can be thought of as a function like this:

```c
if (expression1)
    return expression2;
else
    return expression3;
```


`expression1` is equivalent to the control expression of an `if` statement, so its value must be of scalar type. `expression2` and `expression3` are equivalent to the return values of the same function under different conditions, so their types must be consistent and undergo usual arithmetic conversion.

Here is an example of a function that finds the maximum of two parameters:

```c
int max(int a, int b)
{
    return (a > b) ? a : b;
}

```


### 2.3. Comma Operator

The comma operator is a binary operator that takes the form `expression1, expression2`. The two expressions do not need to have the same type. `expression1` is evaluated first, and its value is discarded. Then `expression2` is evaluated, and its value becomes the value of the entire expression. The comma operator is left-associative, like the `+`, `-`, `*`, and `/` operators. It can be used in the form `expression1, expression2, expression3, ..., expressionn`.  In this case, `expression1, expression2` can be seen as a subexpression. `expression1` is evaluated first, then `expression2` is evaluated and becomes the value of the first subexpression. Then this value is combined with `expression3` to form a larger expression, and so on. The entire calculation process is evaluated from left to right, and the value of the last expression becomes the value of the entire expression.

Note that commas are also used as separators between arguments in a function call, but this is not the same as the comma operator. However, the comma operator can be used like this:

```c
f(a, (t=3, t+2), c)
```

This passes three arguments to the function `f`, and the value of the second argument is the value of the expression `t+2` (which is 5).

### 2.4. sizeof Operator and typedef Type Declarations

`sizeof` is a very special operator that has two forms: `sizeof expression` and `sizeof(type name)`. In the first form, `expression` in `sizeof expression` is not evaluated, but its type is determined according to the type conversion rules, and the number of bytes occupied by this type becomes the value of the entire expression. In the second form, the parentheses around `type name` are required, and the value of the entire expression is the number of bytes occupied by this type.

For example, to find the length of an array using the `sizeof` operator:

```c
int a[12];
printf("%d\n", sizeof a/sizeof a[0]);
```

In this example, the value of `sizeof a` is 48 and the value of `sizeof a[0]` is 4, so the expression `sizeof a/sizeof a[0]` is replaced with the constant 12 at compile time. This is a constant expression.

The result of the `sizeof` operator is of type `size_t`, which is defined in the `stddef.h` header file. However, if `size_t` is not used in the code, this header file does not need to be included. `size_t` is an unsigned integer type, and the compiler can use `typedef` to declare a type like this:

```c
typedef unsigned long size_t;
```

Then `size_t` represents the `unsigned long` type. Different compilers on different platforms may define `size_t` to represent different types, such as `unsigned long long`. The C standard specifies the name `size_t` to hide these details and make the code portable. Therefore, be careful not to mix `size_t` with its underlying type, for example:

```c
unsigned long x;
size_t y;
x = y;
```

If `size_t` represents `unsigned long long` on an ILP32 platform, the high bits may be truncated when `y` is assigned to `x`, and the result may be incorrect.

The `typedef` keyword is used to give a new name to a type. For example:

```c
typedef char array_t[10];
array_t a;
```

This is equivalent to declaring `char a[10];`. Type names follow the naming rules for identifiers and usually have a `_t` suffix to indicate that they are types.

## 3. Side effects and sequence points

If you only want to write code in a well-mannered code, then you probably won't need to read this section except for the short-circuit part. The content of this section is mostly nitpicky, and methods other than short-circuit comparison should be avoided.  (This means that a first-time reader may safely skip all parts of this section, except those about short-circuit comparison.) But sometimes, you don't want to nitpick, but someone forces you to. This is a problem that our students encountered during a job interview:
```c
int a=0;
a = (++a)+(++a)+(++a)+(++a);
```

As far as I know, many companies have a sadistic tendency to ask this type of question during interviews. The answer should be undefined [Note A], and I even doubt whether the person who created the question really knows the answer.
To understand why the result is undefined, we shall first learn about side effects and sequence points. 

We know that calling a function may produce a side effect, and using certain operators (`++`, `--`, `=` and compound assignments) will also produce a side effect. If an expression implicitly contains multiple side effects, which one occurs first and which one occurs later? The C standard specifies that certain points in the code are sequence points, and when a sequence point is reached, all side effects before it must be completed, and no side effects can occur after it. As for the order in which multiple side effects between two sequence points occur, there is no rule, and the compiler can arbitrarily choose the order in which each side effect takes effect. The following list explains various sequence points in detail.

1. When calling a function, before all the preparation work is done and before the function call begins, it is a Sequence Point. For example, when calling `foo(f(), g())`, which of the three expressions `foo`, `f()`, and `g()` is evaluated first is unspecified, but all of them must be evaluated before the final function call can be made. Therefore, the order in which the Side Effects of `f()` and `g()` occur is uncertain, but they must all be completed before the `foo` function is called.
2. After the first operand of the conditional operator `? :`, the comma operator `,`, the logical AND `&&`, and the logical OR `||` is evaluated, it is a sequence point. We just talked about the conditional operator and the comma operator. The conditional operator determines whether to evaluate the value of expression 2 or expression 3 based on whether the value of expression 1 is true. If it decides to evaluate the value of expression 2, expression 3 will not be evaluated, and vice versa. The comma operator is the same. Expression 1 is evaluated before expression 2 is evaluated.

The logical AND and logical OR were discussed in the "Boolean Algebra" section of Chapter 3, but I avoided discussing the order in which their operands are evaluated during the initial learning phase. These two operators are similar to the conditional operator. The value of the left operand is evaluated first, and then depending on whether this value is true, the right operand may or may not be evaluated. For example, in the program in Example 8.5 "Rock, Paper, Scissors," these lines:
```c
ret = scanf("%d", &man);
if (ret != 1 || man < 0 || man > 2) {
	printf("Invalid input! Please input 0, 1 or 2.\n");
	continue;
}
```
can actually be written more simply (similar to the concise style of [K&R]):
```c
if (scanf("%d", &man) != 1 || man < 0 || man > 2) {
	printf("Invalid input! Please input 0, 1 or 2.\n");
	continue;
}
```

The evaluation order of this control expression is follows: first, the value of `scanf("%d", &man) != 1` is evaluated. If the `scanf` call fails and the return value is not equal to 1, the first `||` operation is true if either operand is true, so the next line of `printf` is executed without evaluating `man < 0` or `man > 2`. If the `scanf` call succeeds, the number read by `scanf` is saved in the variable `man`, and the return value is equal to 1. Therefore, if it is not equal to 1, the first `||` operation is false, and the value of the right operand `man < 0` is evaluated as the value of the entire expression. At this time, the value of the variable `man` is exactly the value read by `scanf`, and we check whether it is between 0 and 2. If `man < 0` is false, the value of the entire expression `scanf("%d", &man) != 1 || man < 0` is false, which means that the left operand of the second `||` operation is false, so the value of the right operand `man > 2` is evaluated as the value of the entire expression.

3. At the end of a complete declaration is a sequence point. A complete declaration refers to a declaration that is not part of another declaration. For example, in the declaration `int a[10], b[20];`, the end of `a[10]` and the end of `b[20]` are both Sequence Points.

4. At the end of a complete expression is a sequence point. A complete expression refers to an expression that is not part of another expression. So, if there are two statements like `f(); g();`, `f()` and `g()` are two complete expressions, and the side effect of `f()` must occur before `g()`.

5. A sequence point occurs when a library function is about to return. This rule seems to be included in the previous rule because a function must end a complete expression when it returns. However, many library functions are implemented as macro definitions (see Chapter 21 Section 2.1 "Functional Macro Definitions") and are not actual functions, so this rule is needed.

There are two other types of sequence points related to the execution of some C standard library functions, which are omitted here. Interested readers can refer to Annex C of [C99].

Now we can analyze the example at the beginning of this section. The result of `a = (++a)+(++a)+(++a)+(++a);` is "undefined" because there are five side effects in this expression that change the value of `a`. The order in which these side effects occur is uncertain, and it is only known that they must all occur when the entire expression is evaluated. For example, when calculating the value of the second `++a`, it is uncertain whether the Side Effects of the first, third, and fourth `++a` have occurred, and how many times the value of `a` has been incremented. Therefore, the value of the second `++a` is also uncertain. The result of this line of code is different when compiled with different compilers on different platforms, and it may even be different when compiled with different versions of the same compiler on the same platform.

The first principle to follow when writing expressions is: _Between two Sequence Points, the value of the same variable is only allowed to be changed once_. This single principle is not enough. For example, the variable `i` in `a[i++] = i;` is changed only once, but the result is still undefined because the left side of the equal sign changes the value of `i`, and the right side reads the value of `i`. Which comes first, the change or the read? This read-write order is uncertain. But why is `i = i + 1;` unambiguous? Although the left side of the equal sign also changes the value of `i`, and the right side reads the value of `i`, you cannot calculate the value of `i + 1` without reading the value of `i` first.  Thus, we have our second principle -- _if we need to both read and write a variable between two sequence points, we must make sure the order of read and write is not ambiguous_. 


### Exercises

1. As we discussed, the result of `a = 0; a = (++a)+(++a)+(++a)+(++a);` is indeed unspecified, but C standard mandates it must be some value got from a reasonable process.  Give a upper bound and a lower bound for the final value of `a`.  Make your bounds as tight as possible. 

- [Note A]: It is more like unspecified (or undefined value), but this book informally refer "unspecified" and "undefined" in C standard as "undefined".  The difference is that the unspecified behaviour here results in an "undefined value" (which does not appear in C standard, but does appear in some compiler's documentations), instead of "undefined behaviour" (as appear in C).  In the former case, `a` must have a valid value at the end, and all subsequent calculations are still valid, but we just don't know what's the value.  For the latter case, the program may crash, `a` may hold a Schrödinger's value, or the program may decide to format your hard drives (I am not joking, this is what "undefine" means in the C standard, although all sane compilers will not be implemented in this way). 

<!--
Please translate this file (which is a textbook section) to markdown, while translating it to English.  
Quote in-line C code with a pair of "`"  Make sure the grammar is correct and use classroom tones, as far as possible.  You may change the order of words and sentences or modify a few phases, if this will make the document easier to read.  All HTML tags that are convertible to Markdown should be converted.  Replace all occurrences of "`" in the markdown code you generated by "~".   

Do no paraphrase. 
-->
## 4. Summary

Up until now, we have covered all operators except those related to pointers. It's time to summarize what we've learned.

The operators `+, -, *, /, %, >, <, >=, <=, ==, !=, &, |, ^`, and various compound assignment operators require the operands on both sides to have the same type. The conditional operator `?:` requires the last two operands to have the same type. Before performing any calculations, these operators require usual arithmetic conversion.

Below is a summary of the operators in C language, listed in order of priority from highest to lowest. Each of the listed operators has the same priority. The order in which multiple operators of the same priority are calculated is also explained. The operators related to pointers, `*, &`, and `->`, are also listed here. We will explain them in detail in [Chapter 23: Pointers](ch23.html).

1. Identifiers, constants, strings, and expressions enclosed in parentheses are the most basic units of an expression and have the highest priority in calculations.

2. Postfix operators include array subscripting `[]`, function calls `()`, structure member access `.`, pointer-to-structure member access `->`, postfix increment `++`, and postfix decrement `--`. If an operand has multiple postfix operators, they are calculated in order from left to right (i.e. nearest to farthest). For example, in `a.name++`, `a.name` is calculated first, then `++`. Here, `.name` should be considered as a postfix of a, rather than considering `.` as a binary operator.

3. Unary operators include prefix increment `++`, prefix decrement `--`, `sizeof`, type conversion `()`, address-of `&`, pointer indirection `*`, positive sign `+`, negative sign `-`, bitwise complement `~`, and logical negation `!`. If an operand has multiple prefix operators, they are calculated in order from right to left (i.e. nearest to farthest). For example, in `!~a`, `~a` is calculated first, then `!`.

4. Multiplication `*`, division `/`, and modulo `%` operators. These three operators are left-associative.

5. Addition `+` and subtraction `-` operators. Left-associative.

6. Bitwise shift operators `<<` and `>>`. Left-associative.

7. Relational operators `<, >, <=`, and `>=`. Left-associative.

8. Equality and inequality operators `==` and `!=`. Left-associative.

9. Bitwise AND `&`. Left-associative.

10. Bitwise XOR `^`. Left-associative.

11. Bitwise OR `|`. Left-associative.

12. Logical AND `&&`. Left-associative.

13. Logical OR `||`. Left-associative.

14. Conditional operator `?:`. In [Chapter 4 Section 2: "if/else Statements"](ch04s02.html#cond.ifelse), we discussed the Dangling-else problem. The conditional operator also has a similar problem. For example, is `a ? b : c ? d : e` interpreted as `(a ? b : c) ? d : e` or `a ? b : (c ? d : e)`?  C language specifies the latter.

15. Assignment `=` and various compound assignment (`*=`, `/=`, `%=`, `+=`, `-=`, `<<=`, `>>=`, `&=`, `^=`, `|=`) operators. Among binary operators, only assignment and compound assignment are right-associative.

16. Comma operator `,`. Left-associative.

[K&R] Chapter 2 also has a similar list, but the explanation of associativity is not clear enough. The concepts of left-associative and right-associative only apply to binary operators. I have explained prefix, postfix, and ternary operators separately. For a detailed syntax of C language expressions, refer to Annex A.2 of [C99].

### Exercises 

1. Does the following code result in sum being `0xffff`?

```c
int i = 0;
unsigned int sum = 0;
for (; i < 16; i++)
	sum = sum + 1U<<i;
```

Debrief (read this after complete this question): this question outlined two important issues: 
1. Bitwise arithmetics operators have lower priority than numerical arithmetics. 
2. You should write your code to hint the priority of operators, instead of being misleading. 

# Part III Pointers

This part introduces the sole sparking soul of C -- pointers.  We begin by introducing modern Computer Architecture, which provides readers with just enough knowledge to understand pointers.  The chapter for pointers is adapted from Chapter 23 in Song's book.
Readers are advised to pay attention to the caveats or even enigmas.  You don't need to remember those contents, but just to understand C has these features and understand how to avoid them. 
We shall end this part by introducing some basic function interfaces, especially those related to the standard library. 
Couples of standard library functions, e.g. `printf`, `malloc` and `fopen`.  We will limit the amount of the functions introduced, with the hope that readers can develop their own abilities to read manpages (or cppreference.com) for informations. 

Some "C introduction" books will discuss a lot of functions (in all header files) inside the standard library, but I personally find it a waste of time.  Instead, we will provide a half-line introduction to each header file.  Readers are advised to use commands like `man 0p stdin.h` to search for information when needed. 

# Chapter 17 An (Overly) Brief Introduction to Computer Architecture

Modern computers are all based on the Von Neumann architecture, regardless whether they are embedded systems, PCs, or servers. 
This chapter provides a concise introduction to computer architecture, focusing on the CPU, memory, devices, and their relationships. Understanding these concepts will lay the foundation for studying subsequent chapters. [Note A]

## 0. The von Neumann Architecture

While von Neumann defined computers to have five components: ALU (arithmetic logic unit), CU (control unit), M (memory), I (input) and O (output), people usually claim the architecture contains two key components: the CPU (Central Processing Unit) and memory. 
The CPU contains the ALU (Arithmetic Logic Unit) and the CU (Control Unit). The memory stores both data and instructions, while the CPU fetches instructions from the memory and executes them. Some instructions involve calculations, while others involve reading from or writing to the memory. 

A computer (to the simplest form) [Note B] can be described using the following diagram: 
```
                                                  I/O devices
                                       __________________________________
                                      /                                  \

  +-------------------+  +--------+-   +--------+  +--------+  +--------+
  |                   |  |        |    |        |  |        |  |        |
  |                   |  |        |    |        |  |        |  |        |
  |                   |  |        |    |  Disk  |  |Printer |  |  ...   |
  |                   |  |        |    |        |  |        |  |        |
  |       CPU         |  |  RAM   |    |        |  |        |  |        |
  |                   |  |        |    +---+ +--+  +---+ +--+  +---+ +--+
  |                   |  |        |        | |         | |         | |
  |                   |  |        |        | |         | |         | |
  |                   |  |        |        | |         | |         | |
  |                   |  |        |        | |         | |         | |
  +------+ +----------+  +--+ +---+        | |         | |         | |
         | |                | |            | |         | |         | |
         | |                | |            | |         | |         | |
# ---------+ +----------------+ +------------+ +---------+ +---------+ +----
                 Bus(es)
```
The CPU, memory, and peripherals (I/O devices like disks and printers) are connected through a bus. 
The original (and still most important function) of the motherboard is to provide communications among different components throughout the bus(es). 
A bus can simply be several parallel copper wires. 
For example, the Apple I computer had a 16-line address bus connecting the CPU, memory, and some peripherals, while the data bus consisted of just 8 lines, enabling the CPU to retrieve 8 bits of data at a time (this is why it is called an 8-bit machine). 

## 1. Physical Memory

The connection between CPU and memory can be described using the following diagram [Note C]: 
```
 CPU                                 Memory

+----------------+                  +---------------+
|                |   k bits         |               |
| +------------+ | Address bus      |               |
| |    MAR     +--------------------> At most 2^k   |
| +------------+ |                  | addressable   |
|                |   n bits         | locations     |
| +------------+ |   data bus       |               |
| |    MDR     <-------------------->               |
| +------------+ |                  |               |
|                |                  |               |
|                |                  |               |
|                |   Control lines  |               |
|                <------------------>               |
|                |  E.g.   _        |               |
|                |       R/W MFC etc|               |
+----------------+                  +---------------+
```

The $k$-bit address bus (i.e. it has $k$ wires, each wire use high/low voltage to indicate 1/0) has $2^k$ different values, which allows the CPU to _address_ at most $2^k$ locations in the memory.  The value to be send to the address bus called the _address_ of an object.  On the other hand, the data bus is for sending and receiving data (usually 8 bits, 16 bit, 32 bits or 64 bits). 

On CPUs that are able to process variables whose size are more than one byte, the order in which each byte of a variable is stored is important.  This concept is called _endian_ or _byte order_ [Note I].  Suppose you have a 32-bit value `0x01020304` stored at address `0x10000`  [Note H]:
```
Address | Data      Address | Data
        |                   |
 0x1000 | 0x01       0x1000 | 0x04
 0x1001 | 0x02       0x1001 | 0x03
 0x1002 | 0x03       0x1002 | 0x02
 0x1003 | 0x04       0x1003 | 0x01

  Big Endian         Little Endian
```
- x86 machines are _little endian_, meaning that the most significant bits (MSBs) are stores at the highest address, and the least significant bits (LSBs), at the lowest. 
- On the contrary, some machines are _big endian_, meaning that the LSBs are stored at the highest address, and the MSBs are stored at the lowest address. 

### Discussion Questions

1. Given a 32-bit machine, must it be either little endian or big endian?  Answer this question is pure theoretical and logical way (ignore practicality).  Why it is very unlikely that chip designers will design chips in other ways? 
2. Some machines are biendian, i.e., OS designers are free to choose which one to use.  One example is some modern ARM CPUs.  Typically, OS designers must perform the choice at a very early stage of system start-up.  Explain what difficulties would the OS have if it decides to change the endian later. 


## 2. Memory Hierarchy and Virtual Memory

In modern computers, memory is organized in a hierarchical manner, ranging from smaller and faster storage to larger and slower storage. Here is the typical order of memory components, from top to bottom, along with their typical sizes and access times [Note D]:

1. Registers (tens to hundreds of bytes, almost instant)
2. L1 cache (64KB * 12, 0.8 ns)
3. L2 cache (512KB * 12, 2.5 ns)
4. L3 cache (64MB, 10 ns)
5. Main memory (32GB, 55 ns)
6. Local secondary storage (hard disks) (2TB, 3 ms)
7. Remote secondary storage (tens of ms)

1-4 are considered part of CPU by modern chip manufacturers (although caches are considered M in von Neumann's original statement), and the main memory is an independent component in von Neumann's architecture.  6 and 7 are considered I/O.  Informally speaking, a well-designed computer system will usually use faster memory as caches for slower memory. 

Compilers (or assembly programmers) determine which registers to use, and the CPU automatically manages the population of L1-L3 caches from memory.
Programmers do not need to worry about the process, _i.e._ caching is transparent to programmers. 
PC and servers use a technology known as _virtual memory_, which can be understood as the OS using RAM (main memory) as a cache for disks. 
More importantly, VM is an abstract layer for _memory management_ and _access control_. 
It ensures the isolation of one program's memory space from another's by providing _virtual addresses_ (_VAs_), in contrast to using physical addresses, and presenting a consistent memory map to each program. This abstraction makes memory management transparent to processes.

```
                                              Main memory
+-------------------------+
|                         |                  +------------+
|      CPU Chip           |                  |            |
|                         |                  +------------+
|  +-------+    +-------+ | Address bus      |            |
|  |       |    |       | |                  +------------+
|  |  CPU  +---->  MMU  +-------------------->            |
|  |       | VA |       | | Physical address +------------+
|  +---^---+    +-------+ |                  |            |
|      |                  |                  +------------+
+-------------------------+                  |            |
       |                   Data bus          +------+-----+
       |                                            |
       +--------------------------------------------+
                           Data words
```

When a program wants to access data stored at a certain address, the VA will be passed to _memory management unit_ (MMU) in the CPU.  Then the MMU will _translate_ the VA to a physical address (_PA_), which will then be sent through the address bus to access the corresponding data in RAM. 

With this knowledge, we can now understand what segmentation faults are:
1. A user program wants to access (read/write/executes) data at a certain VA. 
2. The MMU identifies that the program does not have the right to do so (e.g. the VA is read-only, but the program wants to write into it; or the address was not mapped)
3. The MMU raise an exception, and the OS kernel has to step in.  It confirms that the programs is trying to to access a wrong segment, and mark this this as a segment fault. [Note E]
4. The kernel stops the process. 

### Exercises

1. Consider the following code: 
```c
#define ARRAY_SIZE 800

#include <stdio.h>
#include <stdlib.h>

int main (void) {
	// The following is basically the same as 
	// unsigned int a[ARRAY_SIZE][ARRAY_SIZE][ARRAY_SIZE]. 
	// The reason why I write the code in this way will be clear after we 
	// introduce stack and heap. 
	unsigned int (*a)[ARRAY_SIZE][ARRAY_SIZE] = 
		malloc(sizeof(unsigned int) * ARRAY_SIZE * ARRAY_SIZE * ARRAY_SIZE);
	unsigned int (*b)[ARRAY_SIZE][ARRAY_SIZE] = 
		malloc(sizeof(unsigned int) * ARRAY_SIZE * ARRAY_SIZE * ARRAY_SIZE);
	for (int i=0; i<ARRAY_SIZE; i++) {
		for (int j=0; j<ARRAY_SIZE; j++) {
			for (int k=0; k<ARRAY_SIZE; k++) {
				a[i][j][k] = i * j * k;
			}
		}
	}
	for (int i=0; i<ARRAY_SIZE; i++) {                  // (a)
		for (int j=0; j<ARRAY_SIZE; j++) {              // (b)
			for (int k=0; k<ARRAY_SIZE; k++) {          // (c)
				b[i][j][k] = a[i][j][k] * a[i][j][k];
			}
		}
	}
	free(a);
	free(b);
	return 0;
}
```
After exchanging the line (a) and line (c), the behaviour of the code should still be the same.  However, the running times (when compiled without optimization) are very different: 
```bash
$ gcc cache1.c -o cache1
$ gcc cache2.c -o cache2
$ time ./cache1

real	0m2.288s
user	0m1.931s
sys	0m0.342s
$ time ./cache2

real	0m11.115s
user	0m10.768s
sys	0m0.340s

```
Search on the Internet and explain the time difference using the concept "locality" and "cache hit/miss".

## 3. CPU and program executions

After learning about memory, it is time for us to talk about the CPU.  A typical CPU consists of two main components: the Control Unit (CU) and the Arithmetic and Logic Unit (ALU). 
In modern computers, registers are considered a part of the CPU, although they are also a form of memory in the von Neumann architecture.

We are not going to get into details about the details of program execution in hardware level, but we shall briefly introduce the functions of each components inside CPU: 

- _Registers_ are high-speed storage units within the CPU that can quickly store and retrieve a small amount of data. 
Typically, each register is only able to hold one variable [Note F]. 
Some registers can only be used for specific purposes. For example, EIP on x86 (or RIP on x64, or PC on ARM) is used as a program counter, which is known as a _special-purpose_ register. 
Other registers registers can be used in various arithmetic and memory access instructions, such as the EAX (or AX, AH, AL, or RAX on x64) register, which is referred to as a _general-purpose_ register.
- The _Control Unit_ (CU) is responsible for controlling the behaviours of the CPU, the most important of which are determining which instruction to execute and how to execute it. 
A crucial component of the CU is the _program counter_ (PC), a special-purpose register that holds the address of the next instruction to be fetched by the CPU.
The fetched instruction will be sent to the _instruction decoder_ for decoding. 
Each instruction consists of one or multiple bytes, with some bits representing memory addresses, some bits representing register numbers, and some bits indicating the operation to be performed (e.g. addition, subtraction, multiplication, division, or memory access). 
The instruction decoder activates the corresponding parts of the CPU based on the digital signals in the instruction.
- The _arithmetic and logic unit_ (ALU) is activated by the decoder when an instruction is interpreted as an arithmetic operation.  It is responsible for performing operations such as addition, subtraction, multiplication, division, bitwise operations, and logical operations. The instruction specifies where the result of the operation should be stored, which can be in a register or in memory [Note G].

- [Note A]: This chapter is reorganized with a different strategy from Song's book and aims to provide a condensed introduction to computer architecture. 
Given that Computer Architecture is a comprehensive undergraduate course spanning a whole semester, it is not feasible to cover all the details in this chapter. Our goal is to provide enough information for readers to understand the subsequent chapters. Many of the contents in this chapter are derived from my undergraduate course notes.
- [Note B]: I said the "simplest form", because modern computer may use multiple buses for different purposes.  For some very old computers, everything share the same memory address/data bus, and we use this as an example. 
- [Note C]:  MAR and MDR are two "special registers" that temporarily hold the address and data, respectively.  They typically receive values from or send values to general registers.
- [Note D]: The example is given for a computer with good memory stick on an AMD Ryzen 9 5900X. 
- [Note E]: I omitted the possibility that the kernel indeed handled this exception, and allow the program to proceed.  This is indeed fairly common, for example, when some VM locations (page) are stored on hard disks and removed from PM, the kernel will have to load the page back into PM and allow the program to continue. 
- [Note F]: Here, we ignore the cases like SIMD. 
- [Note G]: On some platforms, the results may only be stored in registers.  Typically, these platforms are RISCs (reduced instruction set computers). 
- [Note H]: It is worth noting that some people draw memory maps with higher address at the top.  In those memory maps, MSBs of little endian will appear first. 
- [Note I]: Curious readers may wonder about the order of bits inside each byte when being stored.  The answer is we cannot know if we don't design the RAM module, and we don't need to know.  The reason can be explained in two ways.  One is that it designed to be is transparent to CPUs, and thus, transparent to programmers.  The other way is that a byte is the smallest unit of memory read/write, so bits inside each byte are unordered. 

## Reference answers


Section 1

1.  In theory, a 32-bit machine does not have to be strictly little endian or big endian. It could use a non-standard byte order, such as storing the value `0x01020304` in the order `0x03`, `0x04`, `0x01`, `0x02`. However, it is very unlikely that chip designers will design chips using non-standard byte orders because little endian and big endian provide consistent and efficient ways to access and manipulate data in memory. Introducing alternative byte orders would increase complexity, potentially lead to compatibility issues with existing software and hardware, and make memory access and manipulation more complicated.
2. Changing the endian after the system has started would introduce several difficulties for the OS:
    - Data in memory would need to be converted to the new endian format, which could be a time-consuming and error-prone process.
    - Running processes and applications would need to be notified of the change and potentially restarted or recompiled to ensure they function correctly with the new endian format.
    - System libraries and drivers would also need to be updated or recompiled to support the new endian format, which could lead to compatibility issues and potential system instability.
    - The OS itself would need to be updated to handle the new endian format, which could introduce bugs and other issues.
Overall, changing the endian after the system has started would be a complex and risky process, which is why OS designers typically make this choice at the very early stage of system start-up. 



# Chapter 23: Pointers

In this section, we attempt to discuss the in-and-outs of pointers.  Pointers are the spirit of the C language, so learners are expected to put a large amount of efforts into this chapter.  Some concepts will look strange at the first glance, but after you do some practice and then come back, you might just realize "it is just this". 

In the first section, we have a rather gentle introduction to pointers, in which two important concepts, the `NULL` pointer and `void *` are introduced.  We then introduce pointers as arguments in Section 2.  One related concept is called the _strict aliasing_ rule, the discuss of which is deferred to Section 3, when we talk about the relation between pointers and arrays.  In this section, pointer arithmetics and casting between pointers and integers will be in introduced. 
Then, the keyword `const` will be formally introduced, as it is a very important tool to artificially limit the powerfulness of pointers (in order to avoid unintended effects). 
Next, we shall see pointers to pointers, pointers to functions and pointers to arrays. 
The Chapter will be warped up by discussing incomplete types and complex type declaration.

## 1. Introduction

In Chapter 12, we learned about stacks and queues, which have a top pointer and head and tail pointers, respectively. These "pointers" are essentially integers that represent array indices, allowing us to access elements in an array.  (Paul: here "pointer means the variable `top` in the following code).
```c
#include <stdio.h>

char stack[512];
int top = 0;

void push(char c)
{
	stack[top++] = c;
}

char pop(void)
{
	return stack[--top];
}

int is_empty(void)
{
	return top == 0;
}

int main(void)
{
	push('a');
	push('b');
	push('c');
	
	while(!is_empty())
		putchar(pop());
	putchar('\n');

	return 0;
}
```

In Figure 20.3, "Indirect Addressing", we saw another type of pointers, using which we save the address of a variable's memory location in another memory location. This memory location that stores the address is called a pointer. We can access variables through pointers through indirect addressing. In C, we can represent this type of pointer using a pointer variable. For example, consider the following global variables defined in a program:
```c
int i;
int *pi = &i;
char c;
char *pc = &c;
```

The memory layout of these variables is shown in the figure below.  It can be helpful to understand pointers using this kind of diagrams: 

![Pointer](images/pointer.pointer0.png)

Here, the `&` is the address operator, and `&i` means to get the address of the variable `i`. `int *pi = &i;` defines a pointer variable `pi` of type `int`, and initializes `pi` with the address of `i`. We have mentioned that global variables can only be initialized with constant expressions. If you define `int p = i;`, it is wrong because `i` is not a constant expression. However, initializing a pointer with the address of `i` is correct because the address of i can be determined at compile and link time, and the compiler does not need to wait until runtime, i.e. `&i` is a constant expression. The following two lines of code define a character variable `c` and a character pointer `pc` pointing to `c`. Note that although `pi` and `pc` are pointers of different types, their memory units both occupy 4 bytes because they need to store 32-bit virtual addresses.  (Paul: this is written specifically for x86 machines.)  Similarly, on a 64-bit platform, pointer variables occupy 8 bytes.

We know that when we define multiple arrays in the same statement, each array must have its own square brackets `[]`. For example, `int a[5], b[5];` is correct.  Similarly, when defining multiple pointer variables in the same statement, each one must have `*`, for example:
```c
int *p, *q;
```
If you want to define two pointers, but write `int* p, q;`, it is wrong. This defines an integer pointer `p` and an integer variable `q`. The `[]` for defining arrays is written after the variable, while the `*` for defining pointers is written before the variable, which is easier to misunderstand. The `*` for defining pointers can be omitted before and after the space, and writing `int*p,*q;` is also correct. However, the `*` is usually left with a space between the type int and the variable name, so looking at `int *p, q;` it is clear that a pointer and an integer variable are defined. 

If you want `pi` to point to another integer variable `j`, you can reassign `pi`:
```c
pi = &j;
```

If you want to change the value of the integer variable pointed to by `pi`, for example, increase the value of variable `j` by 10, you can write:
```c
*pi = *pi + 10;
```
Here, the `*` is the _indirection operator_, and `*pi` means to get the value of the variable pointed to by the pointer `pi`. This is also called the _dereference_ operation. Pointers are sometimes referred to as references to variables, so finding variables based on pointers is called dereference.  (Paul: not to confuse with the "reference" type in C++).

The operand of the `&` operator must be an lvalue because only lvalues represent a memory unit and have an address. The result of the operation is a pointer type. The operand of the `*` operator must be a pointer type, and the result of the operation can be an lvalue. Therefore, if the expression `E` can be an lvalue, `*&E` and `E` are equivalent. If the expression `E` is a pointer type, `&*E` and `E` are equivalent.

Pointers can be assigned to each other, and one pointer can be used to initialize another pointer, for example:

```c
int *ptri = pi;

// or 
int *ptri;
ptri = pi;
```
This means `ptri` points to wherever `pi` points to, i.e. it assigns the address _value_ stored in the variable `pi` to the variable `ptri`.

When assigning one pointer to another, note that the two pointers must be of the same type. In our example, `pi` is of type `int *`, and `pc` is of type `char *`. Assigning `pi = pc`; is wrong. However, you can first perform a type cast and then assign:

```c
pi = (int *)pc;
```

![Casting pointers](images/pointer.pointer1.png). 

Now, `pi` points to the same address as `pc`, but accessing through `*pc` can only access one byte, while accessing through `*pi` can access 4 bytes. The last 3 bytes no longer belong to the variable `c`. Unless you are very sure that the int value formed by the combination of one byte of variable `c` and the following 3 bytes is meaningful, you should not assign `pi` like this. Therefore, be very careful when using pointers, as it is easy to point the pointer to the wrong address. Accessing such an address may cause a segmentation fault, read meaningless values, or accidentally overwrite some data, causing errors in the subsequent running of the program. One situation that needs special attention is defining a pointer type local variable without initialization, we shall see an example in the next subsection when talking about the `NULL` pointer

### NULL pointer

```c
int main(void)
{
    int *p;
    ...
    *p = 0;
    ...
}
```
We know that the initial value of variables allocated on the stack is uncertain (Paul: a.k.a. undefined value, and if you dare to use the value of an uninitialized variable, the _result_ is undefined, i.e. the program may do something totally unexpected.), which means that the memory address pointed to by the pointer `p` is uncertain. Accessing an uncertain address with `*p` later will lead to uncertain consequences. If it causes a segmentation fault, it is relatively easy to correct. If it accidentally overwrites data and causes errors in subsequent runs, it is difficult to find the cause of the error. Such pointers pointing to uncertain addresses are called "wild pointers" (formally, unbound pointer). To avoid wild pointers, you should give a clear initial value when defining a pointer variable, or initialize it as NULL:

```c
int main(void)
{
	int *p = NULL;
	...
	*p = 0;
	...
}
```

`NULL` is defined in `stddef.h`

```c
#define NULL ((void *)0)
```

This formula means converting 0 to a pointer, known as the null pointer. 
Its uniqueness lies in the fact that [C11] requires no data to be pointed by `NULL`. 
Most operating system do not store any data near address 0, nor does it map the pages of address `0~0xfff` to physical memory.  (Paul: this was definitely true for IBM compatible PCs.  Good luck if you are writing for an (poorly designed) embedded system.)  Therefore, any access to address 0 will immediately cause a segmentation fault. In this case, `*p = 0;` will cause a segmentation fault, which is easy to find, like a bomb in front of you. In contrast, the errors of wild pointers are more difficult to discover and eliminate, like buried landmines. It could be fine to walk past them once, but there might be problems the next time.

### `void *` pointers

At this point, we should talk about the `void *` type. When programming, a general-purpose pointer is often needed, which can be converted to any other type of pointer, and any other type of pointer can also be converted to a general-purpose pointer. Initially, C language did not have the `void *` type, and `char *` was used as a general-purpose pointer. When conversion was needed, the type conversion operator `()` was used (Paul: for example `(int *) pc`.  ANSI-C (Paul: a.k.a. C89) introduced the `void *` type when standardizing the C language. `void *` pointers can be implicitly converted between other types of pointers without using the type conversion operator. Note that you can only define `void *` pointers, but not void type variables, because `void *` pointers, like other pointers, occupy 4 bytes. If you define a void type variable (i.e., a variable with a temporarily uncertain type), the compiler does not know how many bytes to allocate for the variable. For the same reason, `void *` pointers cannot be directly dereferenced, but must be converted to other types of pointers before dereferencing. `void *` pointers are commonly used in function interfaces, such as:
```c
void func(void *pv)
{
	/* *pv = 'A' is illegal */
	char *pchar = pv;
	*pchar = 'A';
}

int main(void)
{
	char c;
	func(&c);
	printf("%c\n", c);
...
}
```

We shall discuss the details about `(void *)` in the next chapter when we talk about function interfaces. 


<!--
```md
Please translate this file (which is a textbook section) to markdown, while translating it to English.  
Quote in-line C code with a pair of "`"  Make sure the grammar is correct and use classroom tones, as far as possible.  You may change the order of words and sentences or modify a few phases, if this will make the document easier to read.  All HTML tags that are convertible to Markdown should be converted.  Replace all occurrences of "`" in the markdown code you generated by "~". 

Please translate this part (which is a textbook section) to markdown in English. 
Quote in-line C code with a pair of "`"  Make sure the grammar is correct and use classroom tones, as far as possible.  You may change the order of words and sentences or modify a few phases, if this will make the document easier to read.  All HTML tags that are convertible to Markdown should be converted.  Replace all occurrences of "`" in the markdown code you generated by "~". 
Enclose the markdown you generated by a pair of "```". 
```
-->
## 2. Pointer Type Parameters and Return Values

First, let's take a look at the following program:

```c
#include <stdio.h>

int *swap(int *px, int *py)
{
	int temp;
	temp = *px;
	*px = *py;
	*py = temp;
	return px;
}

int main(void)
{
	int i = 10, j = 20;
	int *p = swap(&i, &j);
	printf("now i=%d j=%d *p=%d\n", i, j, *p);
	return 0;
}
```

We know that the process of calling a function is equivalent to defining and initializing formal parameters (a.k.a. parameters, in C standard, `px` and `py` here) with actual arguments (a.k.a. arguments, in C standard, `&i` and `&j` here). The call `swap(&i, &j)` is equivalent to:

```c
int *px = &i;
int *py = &j;
```

So `px` and `py` respectively point to the local variables `i` and `j` in the `main` function. Reading and writing `*px` and `*py` in the `swap` function is actually reading and writing `i` and `j` in the `main` function. Although the variables `i` and `j` cannot be accessed by name in the scope of the `swap` function, they can be accessed through their addresses, and the `swap` function ultimately swaps the values of `i` and `j`.

The above example also demonstrates the case where the function return value is a pointer. The statement `return px;` is equivalent to defining a temporary variable and initializing it with `px`:

```c
int *tmp = px;
```

Then the value of the temporary variable `tmp` becomes the value of the expression `swap(&i, &j)`, and in the `main` function, this value is assigned to `p`, which is equivalent to:

```c
int *p = tmp;
```

The final result is that `p` points to the same location as `px` in the `swap` function, which is `i`. 

We now have enough knowledge to deal with the terms "pass-by-value" and "pass-by-pointer" of argument passing [Note A]. 
Every argument in C is passed by its value, meaning that each argument is copied to the function parameter. This means that any changes made to the parameter inside the function will not affect the original argument. 

Pass-by-pointer, on the other hand, is a way of passing arguments to a function where the address of the argument is passed to the function parameter. This means that any changes made to the object pointer by the parameter inside the function will affect the original argument.
Based on the language definition, there is no such thing as pass-by-pointer in C [Note B].  However, logically, when the subject to study is `x` and `y` in the given code example, we may claim they are passed by pointers. 

- [Note A]: There is another way of argument passing, called pass-by-reference, which is not supported by C.  This means that any changes made to the parameter inside the function will directly affect the original argument [Note C]. 
- [Note B]: An example as passing by pointer (supported by programming language directly) is passing Java's object arguments [Note C]. 
- [Note C]: Pass-by-pointer and pass-by-reference may appear similar, as both can set `x.a = 5` and affect the argument `x`.  Still, there is a key distinction between them. Consider the statements `tmp = x; x = y; y = tmp;`. When using pass-by-reference (e.g., in C++), these statements can successfully swap the values of the arguments corresponding to `x` and `y`. However, when using pass-by-pointer (e.g., in Java), these statements will not be able to swap the values of the arguments, as they only manipulate the local copies of the pointers within the function scope.


### Exercises

1. According to the description in this section, draw a diagram to understand the process of function call and return, just like in "Figure 23.1 Basic Concepts of Pointers". In the next chapter, we will see more complex forms of parameters and return values. At the beginner stage, you should draw a diagram to understand the running process of each program, as long as the basic concepts are clear, you should be able to correctly analyze any complex form.

2. Now let's go back to Exercise 1 in "Chapter Section 3.3 Parameters and Arguments". How should that program be modified?

<!--

```md
Please translate this file (which is a textbook section) to markdown, while translating it to English.  
Quote in-line C code with a pair of "`"  Make sure the grammar is correct and use classroom tones, as far as possible.  You may change the order of words and sentences or modify a few phases, if this will make the document easier to read.  All HTML tags that are convertible to Markdown should be converted.  Replace all occurrences of "`" in the markdown code you generated by "~". 

Please translate this part (which is a textbook section) to markdown in English. 
Quote in-line C code with a pair of "`"  Make sure the grammar is correct and use classroom tones, as far as possible.  You may change the order of words and sentences or modify a few phases, if this will make the document easier to read.  All HTML tags that are convertible to Markdown should be converted.  Replace all occurrences of "`" in the markdown code you generated by "~". 
Enclose the markdown you generated by a pair of "```". 
```
-->


## 3. Pointers and Arrays

Let's start with an example. Consider the following code:

```c
int a[10];
int pa = &a[0];
pa++;
```

First, the pointer `pa` points to the address of `a[0]`. Note that the postfix operator has higher precedence than the unary operator, so it takes the address of `a[0]`, not the address of `a`. Then, `pa++` makes `pa` point to the next element (i.e., `a[1]`). Since `pa` is an `int *` pointer, an `int` element occupies 4 bytes, so `pa++` adds 4 to the address pointed to by `pa`, not 1.

The following diagram helps to understand this concept. From the previous example, we find that the specific value of an address is not important. The key is to explain the relationship between addresses (e.g., `a[1]` is 4 bytes after `a[0]`) and the relationship between pointers and variables (pointers store the address of variables). Now we use a different drawing method, omitting the specific value of the address, using boxes to represent storage space, and using arrows to represent the relationship between pointers and variables.

![Pointers and Arrays](images/pointer.array.png)


Since we may use the `++` operator on pointers, using `+` and `-` operators also makes sense. The expression `pa+2` is meaningful. As shown in the figure above, `pa` points to `a[1]`, so `pa+2` points to `a[3]`. In fact, the `E1[E2]` notation is equivalent to `(*((E1)+(E2)))`. `*(pa+2)` can also be written as `pa[2]`, and `pa` is like an array name. In fact, there is nothing special about array names. The reason why `a[2]` can take the second element of the array is that it is equivalent to `*(a+2)`. In [Section 1 "Basic Concepts of Arrays"](ch08s01.html#array.intro), we discussed that when an array name is used as a rvalue, it is automatically converted to a pointer to the first element. So, `a[2]` and `pa[2]` are essentially the same, both accessing elements through pointer indirection. Since `(*((E1)+(E2)))` can obviously be written as `(*((E2)+(E1)))`, `E1[E2]` can also be written as `E2[E1]`. This means that `2[a]` and `2[pa]` are also correct, but they are not usually written this way.  (Paul: I don't think these are really guaranteed by C standards, but compilers usually implement these expressions in this way) In addition, since `a` is used as a right value and `&a[0]` has the same meaning, `int *pa = &a[0];` is usually not written this way, but in a more concise form: `int *pa = a;`.

### Pointer arithmetics

In [Chapter 8 Section 1 "Basic Concepts of Arrays"](ch08s01.html#array.intro), we also discussed that C allows array indices to be negative. Now you should understand why this is the case. In the example above, the expression `pa[-1]` is legal and represents the same element as `a[0]`.

Now guess, what is the meaning of comparing two pointer variables (`>`, `>=`, `<`, `<=`, `==`, `!=`)? What is the meaning of subtracting two pointer variables? Based on what? Based on the Rule of Least Surprise principle discussed in [Section 3 "Parameters and Arguments"](ch03s03.html#func.paraarg). If you understand the concept of adding and subtracting pointers and constants, and based on your experience with comparison operations, you should guess that `pa + 2 > pa` and `pa - 1 == a`. So, the comparison of pointers in C is based on addresses. C has a more rigorous definition: only pointers pointing to elements in the same array can be meaningfully compared; otherwise, it is meaningless. So what does it mean to subtract two pointers? What is the value of `pa - a`? Since `pa - 1 == a`, `pa - a` should obviously be equal to 1. The subtraction of pointers represents the number of elements between the two pointers, and again, only pointers pointing to elements in the same array can be meaningfully subtracted. What does it mean to add two pointers? It is difficult to think of any meaning for this, so C also stipulates that two pointers cannot be added. If C had defined a meaning for adding two pointers, it would have been quite surprising and not in line with general experience. This is the same principle whether designing programming languages, function interfaces, or human-computer interfaces: the basic usage of the system should be as easy as possible for users to infer based on their past experience and knowledge.

### Pointers and integers

One feature of C that many programmers use, but do not actually understand, is the rule of conversion between integers and pointers. A pointer is stored as in nothing but an integer, but the behaviours of casting from an integer type to a pointer and the other way around are actually implementation-defined [C11 6.3.2.3p5-6].  Usually, compilers will allow casting between the type of integer that has the same size as pointers, but which type to use may vary from platform to platform. Luckily, [C99] introduces two types into `<stdint.h>` that reduce the complexity -- `uintptr_t` and `intptr_t` [Note D]:
```c
#include <stdint.h>
#include <stdio.h>

int main() {
    int a[5] = {1, 2, 3, 4, 5};
    int *p = &a[2];

    uintptr_t ptr_value = (uintptr_t) (void *) p;
    uintptr_t new_ptr_value = ptr_value + sizeof(int);

    int *new_p = (void *) new_ptr_value;

    printf("Original pointer: %p, value: %d\n", (void *) p, *p);
    printf("New pointer after arithmetic: %p, value: %d\n", (void *) new_p, *new_p);

    return 0;
}
```

`uintptr_t` is always guaranteed to be able to convert to or from a pointer to `void` [Note E] [Note F]. If we want `new_p` to point to the next element in memory, we shall increase it by `sizeof(int)`.

The above code also demonstrates the proper way to print a pointer. We use the `%p` conversion specification, which expects a `void *` argument. If we do not perform a casting, we are passing an `int *` to `printf`, which then reinterprets the result as a `void *`. To the best of the author's knowledge, this is not a problem in any platform, but this is actually undefined in the C standard.

The behaviours of conversion between pointers is always allowed, but may produce unaligned results, and if the results are unaligned, the behaviour becomes undefined.  On x64, unless some specific CPU/compiler settings are turned on, a pointer to a valid memory location is always aligned, but some platforms, e.g., ARM requires the last two digit (in binary) of a pointer to `uint32_t` to be 0.  Dereferencing an unaligned pointer creates a hardware failure. 


### Pointers as function arguments

When using array names to get array elements, the syntax is the same as using pointers, but if you use array names as lvalues, there are differences with pointers. For example, `pa++` is legal, but `a++` is not legal. `pa = a + 1` is legal, but `a = pa + 1` is not legal. When an array name is used as a rvalue, it is converted to a pointer to the first element, but when used as a lvalue, it still represents the entire array's storage space, not just the storage space of the first element. When an array name is used as a lvalue, it has a special feature: it does not support the `++` and assignment operators, but it does support the address operator `&`. So, `&a` is legal. We will discuss this syntax in [Section 7 "Pointers to Arrays and Multidimensional Arrays"](ch23s07.html#pointer.array3).

When declaring function prototypes with array parameters, it is equivalent to declaring them with pointer parameters. For example:

```c
void func(int a[10])
{
    ...
}
```

This is equivalent to [Note A]:

```c
void func(int * const a)
{
    ...
}
```

The first form can also be written without the number inside the brackets, and it is still equivalent:

```c
void func(int a[])
{
    ...
}
```

Whether the parameter is written in pointer form or array form, it makes no difference to the compiler; both indicate that the parameter is a pointer. The reason for specifying two forms is to provide useful information to the person reading the code. If the parameter points to a single element, it is usually written in pointer form. If the parameter points to the first element of a series of elements, it is often written in array form.

- [Note A]: we will discuss the `const` keyword in Section 5. 

### Aliasing

Now, it is time to discuss the _strict aliasing_ rule in C.  Basically, it means two pointers are assumed not to point at the same object (aliasing), unless their types are "roughly compatible".  Interested readers are suggested to read the [reference page](https://en.cppreference.com/w/c/language/object).  However, it is sufficient for us to say "roughly compatible" means they are effectively the same type (after expending type name aliasing created by `typedef`), or they are signed/unsigned version of cvr-qualified version of another [Note A]. "Why?", you may ask.  This is for compilers to perform optimization.  One example is given in the reference page: 
```c
// int* and double* cannot alias
void f1(int *pi, double *pd, double d)
{
    // the read from *pi can be done only once, before the loop
    for (int i = 0; i < *pi; i++) 
        *pd++ = d;
}
```

Let's verify the result [Note B]:
```bash
$ gcc -O2 alias.c -g -o alias
$ objdump -dS alias
```
```c
0000000000001210 <f1>:
    for (int i = 0; i < *pi; i++) 
    1210:	48 63 07             	movslq (%rdi),%rax
    1213:	85 c0                	test   %eax,%eax
    1215:	7e 17                	jle    122e <f1+0x1e>
    1217:	48 8d 04 c6          	lea    (%rsi,%rax,8),%rax
    121b:	0f 1f 44 00 00       	nopl   0x0(%rax,%rax,1)
		*pd++ = d;
    1220:	48 83 c6 08          	add    $0x8,%rsi
    1224:	f2 0f 11 46 f8       	movsd  %xmm0,-0x8(%rsi)
    for (int i = 0; i < *pi; i++) 
    1229:	48 39 f0             	cmp    %rsi,%rax
    122c:	75 f2                	jne    1220 <f1+0x10>
}
    122e:	c3                   	ret
```

We can see that the `pi` (stored in `%rdi`) was only dereferenced once, and the result is stored in `%rax` [Note C].  All subsequent comparison are done with `%rax`.  However, if the compiler has to consider the possibility that we may change `*pi` through `pd`, it will have to re-dereference `pi` every time when checking the condition and this is the result when reaching at the condition. 
This the case when optimized with `-Og`: 
```c
    for (int i = 0; i < *pi; i++) 
    117f:	39 07                	cmp    %eax,(%rdi)
    1181:	7f f1                	jg     1174 <f1+0x7>
```

There are two exception to the strict aliasing rule.  One is when accessing data using `char` type pointers (signed or unsigned), the other one is accessing it using `union` or `struct`.  Let's see an example of using `union` to determine the endian of a system: 
```c
#include <stdio.h>
#include <stdint.h>

int main (void) {
	union { 
		uint32_t a;
		uint8_t b[4];
	} u;
	u.a = 0x01020304;

	if (u.b[0] == 0x01 && u.b[3] == 0x04) {
		printf("Big endiant\n");
	} else if (u.b[0] == 0x04 && u.b[3] == 0x01) {
		printf("Little endiant\n");
	}
}
```
We demonstrate _type punning_ [C11 Note 95], a defined behaviour since [C99].  When setting a `union` using one member, but later access it using another member, the content (bits) of one member will be re-interpreted as the content of the other. 

It is also possible to use `char *` to achieve the same task, and it is left as an exercise. 


### Exercises

1. Write a C program (that comforts to the C standard) to determine the endian (introduced in Chapter 17) of the platform.  Try to use two different methods, one using `char *` and the other use union. 

- [Note A]: cvr means `const`, `volatile` and `register`
- [Note B]: Readers who skipped the chapters about assembly may skip the analysis of assembly code, but you might have to take the comments' for granted. 
- [Note C]: `movslq` means move (signed) long `(%rdi)` to quadword `%rax`, and `movsd` means move scalar double. 
- [Note D]: In fact, the two types are defined to be optional in [C99] and [C11], but all modern sane compilers on usual platforms define these types.
- [Note E]: You may ask why I convert `p` to `void *` first, or convert `new_ptr_value` to `void *` first.  C only requires the conversion produce a valid result when performed to/from `void *`, and C does not require `(void *) p` and `p` actually have the same binary representation.  Although, to the best of the my knowledge, every compiler on x86, x64 and ARM use this convention. 
- [Note F]: In fact, there is no requirement that an element in an array with larger index must be stored in higher memory address, or `uintptr_t` actually stores the memory address, but, again, to the best of my knowledge, I do not know any compiler/platform that is an exception to this convention. 

## 4. Pointers and const Qualifiers

The `const` qualifier is often used in combination with pointers in the following ways:

```c
const int *a;
int const *a;
```

Both of these declarations are equivalent. `a` is a pointer to a `const int`, which means that the memory location pointed to by a cannot be modified. Therefore, `(*a)++` is not allowed, but `a++` is allowed.

```c
int * const a;
```

`a` is a `const` pointer to an `int`, which means that `*a` can be modified, but `a` cannot be modified.

```c
int const * const a;
```

`a` is a `const` pointer to a `const int`, which means that both `*a` and `a` cannot be modified.

A pointer to a non-`const` variable or the address of a non-`const` variable can be passed to a pointer to a `const` variable. The compiler can perform an implicit type conversion. For example:

```c
char c = 'a';
const char *pc = &c;
```

However, a pointer to a `const` variable or the address of a `const` variable cannot be passed to a pointer to a non-`const` variable. This is to prevent accidentally modifying the memory location pointed to by the latter. For example, the following code will generate a warning:

```c
const char c = 'a';
char *pc = &c;
```

You are able to write a correctly functional program without using `const`.  However, it is good programming practice to use `const` as much as possible because:

1. `const` provides very useful information to someone reading the code. For example, if a function's parameter is `const char *`, you can safely pass it a `char *` or `const char *` pointer without worrying about the memory location pointed to being modified.

2. Using `const` as much as possible to declare read-only variables can help the compiler check for bugs in the program and prevent accidental modification of data.

3. `const` is a useful hint for the compiler to optimize `const` variables into constants.

In [Chapter 19 Section 3](ch19s03.html#asmc.layout) "Variable Storage Layout," we saw that string literals are usually allocated in the `.rodata` section. In [Section 4](ch08s04.html#array.string) "Strings," we mentioned that string literals are similar to array names and are automatically converted to a pointer to the first element when used as a rvalue. This pointer should be of type `const char *`. We know that the parameter of the `puts` function is of type `const char *`, so you can pass a `char *` or `const char *` pointer to it. Therefore, the following calls are all valid:

```c
const char *p = "abcd";
const char str1[5] = "abcd";
char str2[5] = "abcd";
puts(p);
puts(str1);
puts(str2);
puts("abcd");
```

(Paul: the original example was given using `printf`, but they were indeed discouraged my modern compilers, as they can cause a lot of security issues. 

Note the first line above. If you want to define a pointer to a string literal, this pointer should be of type `const char *`. If you write `char *p = "abcd";`, there is a hidden danger, for example:

```c
int main(void)
{
    char *p = "abcd";
    ...
    *p = 'A';
    ...
}
```

`p` points to the `.rodata` section, which is not allowed to be modified. However, the compiler will not report an error, and a segmentation fault will occur at runtime.

## 5. Pointer and Structure

First, define a structure type, and then define variables and pointers of this type:

```c

struct unit {
    char c;
    int num;
};
struct unit u;
struct unit p = &u;
```

To access the members of the structure through the pointer `p`, you can write `(*p).c` and `(*p).num`. However, for convenience, C provides the `->` operator, which can also be written as `p->c` and `p->num`.

<!--

```md
Please translate this file (which is a textbook section) to markdown, while translating it to English.  
Quote in-line C code with a pair of "`"  Make sure the grammar is correct and use classroom tones, as far as possible.  You may change the order of words and sentences or modify a few phases, if this will make the document easier to read.  All HTML tags that are convertible to Markdown should be converted.  Replace all occurrences of "`" in the markdown code you generated by "~". 

Please translate this part (which is a textbook section) to markdown in English. 
Quote in-line C code with a pair of "`"  Make sure the grammar is correct and use classroom tones, as far as possible.  You may change the order of words and sentences or modify a few phases, if this will make the document easier to read.  All HTML tags that are convertible to Markdown should be converted.  Replace all occurrences of "`" in the markdown code you generated by "~". 
Enclose the markdown you generated by a pair of "```". 
```
-->
## 6. Pointers pointing to pointers

Pointers can point to basic types or composite types, and can also point to another pointer variable, which is called a pointer to a pointer.

```c
int i;
int *pi = &i;
int **ppi = &pi;
```

After defining the above variables, the expression `*ppi` takes the value of `pi` (Paul: for clarification, here "take" means `*ppi == pi` is true), and the expression `**ppi` takes the value of `i`. It is natural to define a pointer to a pointer to a pointer, but it is rarely used:

```c
int ***p;
```

Each element in an array can be a basic type or a composite type, and can also be a pointer type. For example, to define an array `a` consisting of 10 elements, each of which is a pointer to an int:

```c
int *a[10];
```

This is called a pointer array. The relationship between int `*a[10]` and int `**pa` is similar to the relationship between `int a[10]` and `int *pa`. `a` is an array composed of one type of element, and `pa` is a pointer to this type of element. Therefore, if `pa` points to the first element of `a`, then `pa[0]` and `a[0]` refer to the same element; the only difference then the previous case is that `a[0]` is a pointer, instead of a basic type this time:
:

```c
int *a[10];
int **pa = &a[0];
```

(Paul: the below paragraphs are added by myself.  I consider the following method to be the simplest way.)

Now, as the syntax became more confusing, we need a silver bullet for reading pointer definitions.  Fortunately, we have!  The rule is simple: 
> The same operators appear in a pointer definition can be applied to the pointer later.  The final result is of the "terminating" type. 

For example, the definition `int *a[10];` states that `*a[n]` will be an integer. 
- Considering the precedence, it actually means `*(a[n])` is an integer. 
- Since `a[n]` can be dereferenced to an integer, `a[n]` is a pointer to an integer. 
- Then `a` is an array of pointers to integers. 

Remember this rule.  It will be very helpful in the next a few sections and _whenever you programs in C_. 


We know that the standard prototype of the main function should be `int main(int argc, char *argv[])`. `argc` is the number of command line arguments. `argv` is a pointer to a pointer, why not a pointer array? Because as mentioned earlier, `[]` in the function prototype represents a pointer, not an array, which is equivalent to `char **argv`. So why write `char *argv[]` instead of char `**argv`? This way of writing provides useful information to the reader of the code. `argv` does not point to a single pointer, but to the first element of a pointer array. Each element in the array is a pointer to a command line argument string.

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    int i;
    for(i = 0; i < argc; i++)
        printf("argv[%d]=%s\n", i, argv[i]);
    return 0;
}
```

Compile and execute:

```bash
$ gcc main.c
$ ./a.out a b c
argv[0]=./a.out
argv[1]=a
argv[2]=b
argv[3]=c
$ ln -s a.out printargv
$ ./printargv d e 
argv[0]=./printargv
argv[1]=d
argv[2]=e
```

Note that the program name is also a command line argument, so when executing the command `./a.out a b c`, `argc` is 4, and `argv` is shown in the following figure:

![argv pointer array](images/pointer.argv.png)

Since `argv[4]` is `NULL`, we can also traverse `argv` in the following way:

```c
for(i=0; argv[i] != NULL; i++)
```

`NULL` marks the end of `argv`, and this loop ends when it encounters `NULL`, so it will not access out of bounds. This usage is vividly called Sentinel, where NULL is like a sentinel guarding the boundary of the array.

In this example, we also see that if we create a symbolic link to the program and run the program through the symbolic link, we can get a different `argv[0]`. Usually, a program will do different things based on different command line arguments, such as printing different file lists for `ls -l` and `ls -R`. Some programs will do different things based on different `argv[0]`, such as the open source project [Busybox](https://en.wikipedia.org/wiki/BusyBox), which is specially designed for embedded systems. It combines various Linux commands and compiles them into _one_ executable file `busybox`. When installing, the `busybox` program is copied to the `/bin` directory of the embedded system (Paul: e.g. your router or mobile phone), and many symbolic links pointing to `/bin/busybox` are created in directories such as `/bin`, `/sbin`, `/usr/bin`, and `/usr/sbin`, named `cp`, `ls`, `mv`, `ifconfig`, etc. No matter which command is executed, it is actually executing `/bin/busybox`, which distinguishes different commands based on `argv[0]`.


### Exercises

Think about the effect of `const`'s below, and write a program to verify your inference. 

```c
const char **p;
char *const *p;
char **const p;
```

Paul: Hint: the silver bullet also applies here. 


## 7. Pointers to arrays and multidimensional arrays

In C, pointers can point to composite types. In the previous section, we learned about pointers to pointers. In this section, we will learn about pointers to arrays.

To define a pointer to an array of 10 integers, we use the following syntax:

```c
int (*a)[10];
```

(Paul: the below paragraphs were heavily modified.  I consider the following method to be the simplest way.)

Compared to the definition of a pointer array in the previous section, `int *a[10];`, the only difference is a pair of parentheses.  Recall that `[]` has higher precedence than `*`. 
- `*a[n]` means we are dereferencing an element of the array `a[]`. 
- `(*a)[n]` means we first dereference `a`, which results in an array.  We then select the `n`-th element from the array. 

Applying the silver bullet again: 
> The same operators appear in a pointer definition can be applied to the pointer later.  The final result is of the "terminating" type. 
- `(*a)[10]` is an integer, so `(*a)` is an array of integers. 
- Then `a` is a pointer to an array of integers. 

To better explain the silver bullet, we may also convert the definitions using two lines, which involve `typedef`. 
The definition of `int *a[10]` can be converted to 
```c
typedef int *t;
t a[10];
```
- This states that `a` is an array of type `t`, where 
- type `t` is defined as a pointer to integer. 

The definition of `int (*a)[10]` can be converted to 
```c
typedef int u[10];
u *a;
```
- This states that `a` is a pointer to type `u`
- type `u` is defined as an array of integers. 


Now, guess how we use a pointer to an array?  The silver bullet has the answer: "the same operators appear in a pointer definition can be applied to the pointer": 
```c
int a[10];
int (*pa)[10] = &a;

printf("%p %p\n", a, pa);
```

`a` is an array. In the expression `&a`, the array name is a lvalue, and the entire array's first address is assigned to the pointer `pa`. Note that `&a[0]` represents the first element's first address of the array `a`, while `&a` represents the first address of the array `a`. Obviously, the numerical values of these two addresses are the same, but the types of these two expressions are different pointer types. The former's type is `int *`, while the latter's type is `int (*)[10]`:

```bash
$ gcc test.c
$ ./a.out
0x7ffd4e9494b0 0x7ffd4e9494b0
```

Paul: Note the subtle difference of `(*p)[]` in function definitions and in a local (or global) variable definition.  Still, first-time reader may skip the following a few paragraphs to the TL;DR part. 

`*pa` represents the array a pointed to by `pa.` Therefore, the expression `(*pa)[0]` represents the first element of the array `a[0]`. Note that `*pa` can be written as `pa[0]`, so the expression `(*pa)[0]` can also be rewritten as `pa[0][0]`. `pa` is like the name of a two-dimensional array, what does it mean? Let's analyze `pa` and the two-dimensional array together.

The relationship between int `a[5][10]`; and `int (*pa)[10];` is similar to the relationship between `int a[10];` and `int *pa;`: `a` is an array consisting of one type of element, and `pa` is a pointer to this element. Therefore, if `pa` points to the first element of `a`:

```c
int a[5][10];
int (*pa)[10] = &a[0];
```

Then `pa[0]` and `a[0]` refer to the same element. The only difference is that this element is an array of 10 integers instead of a basic type. In this way, we can use `pa` as the name of a two-dimensional array. `pa[1][2]` and `a[1][2]` refer to the same element. Moreover, `pa` is more flexible to use than `a`. Array names do not support operations such as assignment and self-increment, while pointers do. `pa++` makes `pa` skip one row of the two-dimensional array (40 bytes) and point to the first address of `a[1]`.

Paul's TL;DR: Previously, I keep claiming an array name is equivalent to a constant pointer, but it is true only for a one-dimensional array.  For the two-dimensional case, the situation is more complex.  Consider the above code, it immediately tells us there are three cases when `a[5][10]` is a valid expression: 
1. `a` is a two-dimensional array
2. `a` is an one-dimensional array, each of its element is a pointer towards an integer.
3. `a` is a pointer, pointing to another pointer that points to an integer (or an array).

- For the first case, `a[0]` is an array, and `a[0][0]` is an integer, but they have the same address.
- For the second case, `a[0]` is a pointer, which has a different address as an integer. 
- For the third case, `a[0]` is a pointer to an integer, which can represents an array.  However, this time, `&a[0] == &a[0][0]` still does not hold.


### Exercise

1. We have the following variables defined:

```c
char a[4][3][2] = {{{'a', 'b'}, {'c', 'd'}, {'e', 'f'}},
                   {{'g', 'h'}, {'i', 'j'}, {'k', 'l'}},
                   {{'m', 'n'}, {'o', 'p'}, {'q', 'r'}},
                   {{'s', 't'}, {'u', 'v'}, {'w', 'x'}}};

char (*pa)[2] = &a[1][0];
char (*ppa)[3][2] = &a[1];
```
To access the element `'r'` in the array a using `pa` or `ppa`, respectively, how should we write the code?

Answer: 
- `pa[5][1]`
- `ppa[1][2][1]`


## 8. Function Types and Function Pointer Types

In C language, functions are also a type, and pointers to functions can be
defined. We know that the memory unit of a pointer variable stores an address
value, and the function pointer stores the entry address of the function (in
the `.text` segment). Let's look at a simple example:


```c
// Example 23.3. Function Pointer
#include <stdio.h>

void say_hello(const char *str)
{
	printf("Hello %s\n", str);
}

int main(void)
{
	void (*f)(const char *) = say_hello;
	f("Guys");
	return 0;
}
```

Recall the _only_ golden rule: 
> The same operators appear in a pointer definition can be applied to the pointer later.  The final result is of the "terminating" type. 

Using our silver bullet, let's analyze the type declaration of variable `f`: `void (*f)(const char *)`.
- According to the definition, `f` may be used as `(*f)(p)`, where `p` is `char *`, and the resulting expression will be of `void` type.
- Since we can dereference `f`, it is a pointer. 
- Since we can call the result of dereferencing `f`, `(*f)` is a function indeed, i.e. `f` is a pointer to a function!

As a reminder, `const` in the parameter list states that `f` promises not to modify the content of the thing pointed to by the pointer. 

Just like arrays, if you put a function name as an rvalue, it will be automatically (i.e. implicitly) converted to a pointer to the function.  Thus, the two lines below are equivalent:
```c
f = &say_hello;
f = say_hello;
```

We can call a function directly through a function pointer, as in `f("Guys")`, or by dereferencing the pointer first, as in `(*f)("Guys")`. The latter is equivalent to calling `say_hello("Guys")`.

Here are a few more examples to help you distinguish between function types and function pointer types. Let's define a function type `F`:

```c
typedef int F(void);
```

This declares 

Out silver bullet even applies to analysing the complex `typedef` statement!  To read this, first pretends the keyword `typedef` does not exist, `int F(void);` is a function declaration, which states `F` as a function that takes no argument, and return an integer.  The keyword `typedef` make what originally would be a variable definition became a type definition.  So, `F` indeed means the type of function takes no arguments and returns an `int`. 

We can declare `f` and `g` as follows:
```c
F f, g;
```
This is equivalent to 
```c
int f(void);
int g(void);
```

However, the declaration below is incorrect: 
```c
F h(void);
```

Functions can return `void`, scalar types, structures, and unions, but not function types or array types. Still, the following function declaration is correct:
```c
F *e(void);
```
This is because instead of returning a function, it returns a pointer to a function. 
We can also add a pair of parentheses to mean the same thing:
```c
F *((e))(void);
```
However, if we put the `*` inside the parentheses, it means something different (Paul: exercise: analyse using our silver bullet):
```c
int (*fp)(void);
```

This declares a function pointer, not a function. We can also declare `fp` as `F *fp;`.

What are the benefits of calling a function through a function pointer instead of directly? 
The short answer is it provides an extra layer of abstraction, and it can be used in a similar way as multimorphism in object-oriented programming. 
Let's consider an example. In Exercise 1 of Chapter 7 Section 3 "Data Type Tags", we added a type field to a complex number structure and had to rewrite `real_part`, `img_part`, `magnitude`, and `angle` functions to handle both rectangular and polar forms. We had to use `if ... else ...` or `switch ... case ...` statements to distinguish between the two forms, like: 
```c
enum coordinate_type { RECTANGULAR, POLAR };
struct complex_struct {
	enum coordinate_type t;
	double a, b;
};

double real_part(struct complex_struct z)
{
	if (z.t == RECTANGULAR)
		return z.a;
	else
		return z.a * cos(z.b);
}
```

If we have three or more forms, the code maintenance becomes difficult. Here is an alternative implementation using function pointers:
```c
double rect_real_part(struct complex_struct z)
{
	return z.a;
}

double rect_img_part(struct complex_struct z)
{
	return z.b;
}

double rect_magnitude(struct complex_struct z)
{
	return sqrt(z.a * z.a + z.b * z.b);
}

double rect_angle(struct complex_struct z)
{
	double PI = acos(-1.0);

	if (z.a > 0)
		return atan(z.b / z.a);
	else
		return atan(z.b / z.a) + PI;
}

double pol_real_part(struct complex_struct z)
{
	return z.a * cos(z.b);
}

double pol_img_part(struct complex_struct z)
{
	return z.a * sin(z.b);
}

double pol_magnitude(struct complex_struct z)
{
	return z.a;
}

double pol_angle(struct complex_struct z)
{
	return z.b;
}

double (*real_part_tbl[])(struct complex_struct) = { rect_real_part, pol_real_part };
double (*img_part_tbl[])(struct complex_struct) = { rect_img_part, pol_img_part };
double (*magnitude_tbl[])(struct complex_struct) = { rect_magnitude, pol_magnitude };
double (*angle_tbl[])(struct complex_struct) = { rect_angle, pol_angle };

#define real_part(z) real_part_tbl[z.t](z)
#define img_part(z) img_part_tbl[z.t](z)
#define magnitude(z) magnitude_tbl[z.t](z)
#define angle(z) angle_tbl[z.t](z)
```

Paul:  This shows that although C does not have OOP grammars, you may still to OOP programming in C. 

In the example above, we see that using function pointers can simplify code maintenance when dealing with multiple forms. Instead of using `if ... else ...` or `switch ... case ...` statements to distinguish between the different forms, we can use function pointers to call the appropriate function directly. This can make the code more modular and easier to read. For example, in the complex number structure, we can define separate functions for rectangular and polar forms, and use function pointers to call the appropriate function based on the type field. This can make the code more flexible and easier to maintain, especially when dealing with more than two forms.


<!--
```md
Please translate this file (which is a textbook section) to markdown, while translating it to English.  
Quote in-line C code with a pair of "`"  Make sure the grammar is correct and use classroom tones, as far as possible.  You may change the order of words and sentences or modify a few phases, if this will make the document easier to read.  All HTML tags that are convertible to Markdown should be converted.  Replace all occurrences of "`" in the markdown code you generated by "~".   Do no parapharse. 
```
-->

## 9. Incomplete Types and complex type declaration 

In [Section 1 "Compound Types and Structures"](ch07s01.html), we discussed the
concepts of arithmetic types and scalar types. Now that we have learned a few
more types, let's summarize the types in C language. The following figure is
from [Standard C: A Reference](bi01.html#bibli.standardc).

![C Language Types Summary](images/pointer.type.gif)

C language types are divided into three categories: function types, object
types, and incomplete types. Object types are further divided into scalar types
and non-scalar types. Pointer types belong to scalar types, so they can also be
operands of logical AND, OR, and NOT operations, as well as control expressions
for `if`, `for`, and `while`. A `NULL` pointer represents false, and a non-NULL
pointer represents true. Incomplete types are types that are not fully defined
yet, and the compiler does not know how many bytes of storage space they should
occupy. For example:

```c
struct s;
union u;
char str[];
```

Variables with incomplete types can be combined into a complete type through
multiple declarations, such as declaring the array `str` twice:
```c
char str[];
char str[10];
```

When the compiler encounters the first declaration, it considers `str` to be an
incomplete type. When it encounters the second declaration, `str` is combined
into a complete type. If the compiler still cannot combine `str` into a complete
type by the end of the program file, it will report an error. You might wonder
what the purpose of this syntax is and why not declare `str` as a complete type
in the first place. There are certain reasons for doing this, such as having the
first declaration in a header file and the second declaration in a `.c` file. In
this way, if you want to change the array length, you only need to modify the
`.c` file, and the header file does not need to be changed.

Incomplete structure types have an important role, for example:
```c
struct s {
	struct t *pt;
};

struct t {
	struct s *ps;
};
```

`struct s` and `struct t` each have a pointer member pointing to the other type.
The compiler processes from front to back. When it sees `struct s { struct t* pt; };`,
it considers `struct t` to be an incomplete type, and `pt` is a pointer to an
incomplete type. Despite this, the pointer is a complete type because any
pointer occupies 4 bytes of storage space, which is very clear. Then the
compiler sees `struct t { struct s *ps; };`, and at this point, `struct t` has a
complete definition, so it is combined into a complete type, and the type of
`pt` is combined into a pointer to a complete type. Since `struct s` has a
complete definition earlier, `struct s *ps;` also defines a pointer to a
complete type.

The following type definition is incorrect:
```c
struct s {
	struct t ot;
};

struct t {
	struct s os;
};
```

When the compiler sees `struct s { struct t ot; };`, it considers `struct t` to
be an incomplete type and cannot define the member `ot` because it does not know
how many bytes it should occupy. Therefore, a structure can recursively define
pointer members, but it cannot recursively define variable members. You can
imagine that if recursive variable member definitions were allowed, `struct s`
would have a `struct t`, `struct t` would have a `struct s`, and `struct s` would
have a `struct t` again, resulting in an infinitely recursive definition.

The above is a recursive definition of two structures, and a single structure
can also be recursively defined:

```c
struct s {
	char data[6];
	struct s* next;
};
```

When the compiler processes the first line `struct s {`, it considers `struct s`
to be an incomplete type. When it processes the third line `struct s *next;`, it
considers `next` to be a pointer to an incomplete type. When it processes the
fourth line `};`, `struct s` becomes a complete type, and `next` also becomes a
pointer to a complete type. Structures like this are the basic building blocks
of many data structures, such as linked lists, binary trees, etc., which we will
discuss in detail later. The following figure shows a linked list composed of
several `struct s` structures, which are called nodes of the linked list.

![Linked List](images/pointer.linkedlist.png)

The head pointer is the head pointer of the linked list, pointing to the first
node. Each node's next pointer field points to the next node, and the last
node's next pointer field is `NULL`, represented by 0 in the figure.

You can imagine that if you combine pointers, arrays, functions, and structures
layer by layer, you can create very complex types. Let's look at a few complex
declarations:

```c
typedef void (*sighandler_t)(int);
sighandler_t signal(int signum, sighandler_t handler);
```
This declaration comes from `signal(2)` (Paul: you can read the reference using the `man 2 signal` command in Linux). 
`sighandler_t` is a function pointer
that points to a function with one parameter and a `void` return value.
`signal` is a function with two parameters, the first of which is a `int` parameter, and the second is a
`sighandler_t` parameter, and its return value is also a `sighandler_t`
parameter. If you combine these two lines into one, it would be:
```c
void (*signal(int signum, void (*handler)(int)))(int);
```

(Paul: the next paragraph presents out silver bullet in a different way we previously introduced, using `typedef`)

Now, let analyze the declaration: 
```c
int (*(*fp)(void *))[10];
```

1. `fp` is enclosed with a `*`, indicating that `fp` is a pointer pointing to a `T1` type: 
```c
typedef int (*T1(void *))[10];
T1 *fp;
```
2. `T1` should be a function type with a `void *` parameter and a `T2` return
value:
```c
typedef int (*T2)[10];
typedef T2 T1(void *);
T1 *fp;
```
3. `T2` is also enclosed with `*`, indicating that it is a pointer pointing to a
`T3` type:
```c
typedef int T3[10];
typedef T3 *T2;
typedef T2 T1(void *);
T1 *fp;
```

Obviously, `T3` is an array of integers, which length is 10. 

# Chapter 24: Function Interfaces
As we discussed in [Chapter 11 Section 6 "Binary Search"](ch11s06.html#sortsearch.binary), there is a contract between the caller and the implementer of a function. Before calling a function, the caller must provide certain conditions for the implementer (Paul: a.k.a. callee.  For the consistency of the text, we keep Song's original term), and when the function returns, the implementer must fulfill certain obligations to the caller. How can we describe this contract? First, we rely on the function interface, which includes the function name, parameters, and return value. As long as the function and parameter names are reasonable and the parameter and return value types are accurate, the caller can guess how to use the function just by looking at the interface. However, the function interface cannot express the entire semantics of the function, so documentation plays an important supplementary role. What should be written in the function documentation and how to write it? Manpage provides a good example for us.

(Paul: As a note for terminologies, people usually use caller and callee or user and implementer to refer to a function calling another function and the function to be called, respectively.  Mr. Song used "caller" and "implementer" here.)

Once the function interface is combined with pointers, it becomes extremely flexible and has various uses. However, the essence remains the same. As long as we analyze the pointers like in Figure 23.1 "Basic Concepts of Pointers" (see below), we can understand any pointer usage. Therefore, if you truly understood the previous chapter, you can comprehend this chapter without studying it. This chapter is written to accommodate readers with lower comprehension abilities. This chapter summarizes the function interface into several common patterns, discussing how to write the function interface and the function documentation for each pattern.

(Paul: due to the frank speech by Mr. Song here, I am only going to translate the first two sections as examples for you to understand pointers, and how to read documents.) 

![Pointers](images/pointer.pointer0.png)

## 1. Preparation for this chapter

This section introduces several C standard library functions that will be used in the example code of this chapter. Let's first understand how the interfaces of these functions are designed and how the manpage is written. Other commonly used C standard library functions will be introduced in the next chapter.

Paul: apart from reading manpage, we will also introduce the website [cppreference.com](https://en.cppreference.com/w/c) as a softer introduction to documentations.  This website is also very useful when you need to confirm specifications regarding the language standard itself, without really consulting C11 or C17. 

### 1.1. `strcpy` and `strncpy`

From now on, we will use many library functions. When learning each library function, you must read the manpage. The manpage is always at our fingertips. You can search for anything by typing a command. However, many beginners do not like to read the Man Page. They would rather search books and materials all over the world than read the Man Page. I analyzed that there are three reasons for this:

(Paul: point 1 and 3 no longer apply)

1. Poor English. Then learn English well before learning programming. Otherwise, even if you master this book, you will not be able to do development work because you do not have the ability to learn further.  (Paul: Since you arrived here, I don't expect you have this problem.)
2. The language of the manpage is not friendly enough. The manpage is not like this book, which explains from shallow to deep. It is straightforward and concise. You can grasp the key points by reading it several times and sorting out your thoughts. This section analyzes an example to help readers grasp the language characteristics of the manpage.
3. The manpage usually does not have examples. To describe how a function is used, you rely on the interface and documentation, not examples. The usage of a function is nothing more than several patterns summarized in this chapter. As long as you master this chapter, you don't need an example for each function to teach you how to use it.  (Paul: this does not apply, because the newest version of manpages provide some examples)

In short, the manpage must be read. Even if you don't understand it at first, you have to read it with a hard scalp. To encourage readers to read the Man Page, this book will not summarize the library functions into an appendix attached to the end of the book, as in [K&R]. Now let's analyze `strcpy(3)`.

Paul: I rewrote and updated the contents for reading documentations, as manpages have been updated several times in the last decade. 

#### Manpage Case Study 1: version 6.04 on Arch Linux

The pages are also available at <https://man.archlinux.org/man/strcpy.3> and <https://man.archlinux.org/man/strncpy.3>. 

(Originally, the references for `strcpy` and `strncpy` are written together, but the newer version split the page).  We only focus on the one for `strncpy`. 

```c
stpncpy(3)                 Library Functions Manual                 stpncpy(3)

NAME
       stpncpy,  strncpy  - zero a fixed-width buffer and copy a string into a
       character sequence with truncation and zero the rest of it

LIBRARY
       Standard C library (libc, -lc)

SYNOPSIS
       #include <string.h>

       char *strncpy(char dst[restrict .sz], const char *restrict src,
                      size_t sz);
       char *stpncpy(char dst[restrict .sz], const char *restrict src,
                      size_t sz);
```

The Man Page describes two functions, `strncpy` and `stpncpy`. You can see this Man Page by typing the command `man 3 strncpy` or `man 3 stpncpy`. The purpose of these two functions is to copy one string to another string. The `SYNOPSIS` section provides the prototypes of these two functions and which header files need to be included to use these functions. The parameters `dst`, `src`, and `n` are all highlighted. Sometimes you don't want to read the entire Man Page from beginning to end, but want to check the meaning of a certain parameter. You can quickly find the part you care about through the highlighted parameter name.

`dst` means destination, and `src` means source. You can guess that the string pointed to by `src` is copied to the memory space pointed to by `dst` from the name. This can also be seen from the types of the two parameters. `dst` is of type `char * restrict`, while `src` is of type `const char * restrict`, indicating that the memory space pointed to by `src` can only be read but not modified in the function, and the memory space pointed to by `dst` may be modified in the function.  Obviously, the purpose of modification is that the caller can read the modified result after the function returns. The function of the `restrict` keyword will be discussed later when we use <cppreference.com> as another example.  For now, just ignore this qualifier.  The last parameter is named `sz`, which stands for `size`, as a reasonable guess, it means the size of the array.  So it is probably used in this way:

```c
strncpy(buf2, "Hello world!", sizeof(buf2));
```

To confirm our guess, we refer to the "Description" section: 
```c
DESCRIPTION
       These functions copy the string pointed to by src  into  a  null-padded
       character sequence at the fixed-width buffer pointed to by dst.  If the
       destination buffer, limited by its size, isn't large enough to hold the
       copy,  the  resulting character sequence is truncated.  For the differ‐
       ence between the two functions, see RETURN VALUE.

       An implementation of these functions might be:

           char *
           strncpy(char *restrict dst, const char *restrict src, size_t sz)
           {
               stpncpy(dst, src, sz);
               return dst;
           }

           char *
           stpncpy(char *restrict dst, const char *restrict src, size_t sz)
           {
               bzero(dst, sz);
               return mempcpy(dst, src, strnlen(src, sz));
           }
```

In an older version of manpage, where the `restrict` was not introduced, it was emphasised in the document that the space of `src` and `dst` may not overlap.  However, since the introduction of the `restrict` keyword, the emphasis became redundant.  (Paul: we will learn the keyword later in this section). The documentation for strcpy(3) is already relatively friendly to read, as it provides a reference implementation. 

There is a section discuss the return values: 

```c
RETURN VALUE
       strncpy()
              returns dst.

       stpncpy()
              returns a pointer to one after the last character in the  desti‐
              nation character sequence.

```
Why it returns a pointer?  Because C programmers love the following syntax: 
```c
printf("%s\n", strncpy(buf, "hello", 6));
```

The "Standard" section discuss the standards `strncpy` comforts to.  Since the declaration of `strncpy` in C89 and in C11 are different, they are listed differently. 
```c
STANDARDS
       strncpy()
              C11, POSIX.1-2008.

       stpncpy()
              POSIX.1-2008.

STANDARDS
       strncpy()
              C89, POSIX.1-2001, SVr4, 4.3BSD.

       stpncpy()
              glibc 1.07.  POSIX.1-2008.

```

The section "Caveats" listed the potential issues that can raise if you are not careful using the functions. 
If you read a manpage, do not ignore this section, for example, the first sentence of this manpage instantly provides an important clarification about the role of the function: 

```c
CAVEATS
       The name of these functions is confusing.  These  functions  produce  a
       null-padded character sequence, not a string (see string_copying(7)).

       It's  impossible  to  distinguish truncation by the result of the call,
       from a character sequence that just fits the destination buffer;  trun‐
       cation  should  be detected by comparing the length of the input string
       with the size of the destination buffer.

       If you're going to use this function in chained calls, it would be use‐
       ful  to  develop  a  similar function that accepts a pointer to the end
       (one after the last element) of the destination buffer instead  of  its
       size.
```

The section "examples" is rather new, and it gave an example on how to use the functions described in the page.  This can clear out many confusions. 
```c
EXAMPLES
       #include <err.h>
       #include <stdio.h>
       #include <stdlib.h>
       #include <string.h>

       int
       main(void)
       {
           char    *p;
           char    buf1[20];
           char    buf2[20];
           size_t  len;

           if (sizeof(buf2) < strlen("Hello world!"))
               warnx("strncpy: truncating character sequence");
           strncpy(buf2, "Hello world!", sizeof(buf2));
           len = strnlen(buf2, sizeof(buf2));

           printf("[len = %zu]: ", len);
           printf("%.*s\n", (int) len, buf2);  // "Hello world!"

           if (sizeof(buf1) < strlen("Hello world!"))
               warnx("stpncpy: truncating character sequence");
           p = stpncpy(buf1, "Hello world!", sizeof(buf1));
           len = p - buf1;

           printf("[len = %zu]: ", len);
           printf("%.*s\n", (int) len, buf1);  // "Hello world!"

           exit(EXIT_SUCCESS);
       }

```

#### Manpage Case Study 2: version 5.13 on Ubuntu 22.10

The manpage is available online at <https://manpages.ubuntu.com/manpages/kinetic/en/man3/strncpy.3.html>. 

```c
NAME

       strcpy, strncpy - copy a string

SYNOPSIS

       #include <string.h>

       char *strcpy(char *restrict dest, const char *src);
       char *strncpy(char *restrict dest, const char *restrict src, size_t n);
```

This manpage describes two functions, `strcpy` and `strncpy`. You can type the command `man 3 strcpy` or `man 3 strncpy` to access this `manpage`. The purpose of these two functions is to copy one string to another string. The SYNOPSIS section provides the prototypes of these functions and specifies which header files need to be included to use them. The parameters `dest`, `src`, and `n` are highlighted. Sometimes, you may not want to read the entire Man Page from start to finish but rather look up the meaning of a specific parameter. By using the highlights and parameter names, you can quickly find the section you are interested in.

The parameter `dest` represents the destination, while `src` represents the source. Just by looking at their names, you can guess that the function copies the string pointed to by `src` into the memory space pointed to by `dest`. This is also evident from the types of the two parameters: `dest` is of type `char * restrict`, while `src` is of type `const char * restrict`. This indicates that the memory space pointed to by `src` can only be read within the function and not modified, whereas the memory space pointed to by `dest` will be modified within the function.  The meaning of `restrict` will be discussed later.  Clearly, the purpose of modifying `dest` is to allow the caller to read the modified result after the function returns. Therefore, it can be inferred that the `strcpy` function is used as follows:

```c
char buf[10];
strcpy(buf, "hello");
printf(buf);
```

Regarding the parameter `n` in `strncpy`, its purpose cannot be deduced solely from the function interface. We need to refer to the documentation below (Description section specifically) to understand its usage.

```c
DESCRIPTION

       The  strcpy() function copies the string pointed to by src, including the terminating null
       byte ('\0'), to the buffer pointed to by dest.  The  strings  may  not  overlap,  and  the
       destination  string  dest  must  be  large  enough  to receive the copy.  Beware of buffer
       overruns!  (See BUGS.)

       The strncpy() function is similar, except  that  at  most  n  bytes  of  src  are  copied.
       Warning:  If  there  is  no null byte among the first n bytes of src, the string placed in
       dest will not be null-terminated.

       If the length of src is less than n, strncpy() writes additional null  bytes  to  dest  to
       ensure that a total of n bytes are written.

       A simple implementation of strncpy() might be:

           char *
           strncpy(char *dest, const char *src, size_t n)
           {
               size_t i;

               for (i = 0; i < n && src[i] != '\0'; i++)
                   dest[i] = src[i];
               for ( ; i < n; i++)
                   dest[i] = '\0';

               return dest;
           }
```

The documentation emphasizes that `strcpy` copies the terminating `\0` character along with the string to `dest`, ensuring that `dest` is a null-terminated string. However, another important consideration is that `strcpy` only knows the starting address of the `src` string and is unaware of its length. It will continue copying until it encounters a '\0' character. Therefore, the memory space pointed to by `dest` must be large enough to accommodate the copied string; otherwise, there is a risk of writing beyond the allocated memory, as illustrated in the following example:

```c
char dest[5];
char src[] = "Hello, World!";

strcpy(dest, src); 
// Potential buffer overflow, as dest is not large enough to hold the entire src string and the null-terminator.
```

If the memory space pointed to by `src` is not guaranteed to be null-terminated (`\0`), there is a possibility of reading beyond its boundaries, which can result in accessing invalid memory. 

```c
char buf[10] = "abcdefghij", str[4] = "hell";
strcpy(buf, str);
```

Because the implementer of the `strcpy` function cannot determine the length of the `src` string or the size of the `dest` memory space from the function interface, the responsibility for "ensuring no buffer overflows" lies with the caller. The caller should provide a `dest` parameter that points to a sufficiently large memory space. Similarly, the responsibility for "ensuring no out-of-bounds reads" also lies with the caller, who should ensure that the `src` parameter points to memory that is null-terminated with '\0'.

Additionally, the documentation emphasizes that the memory spaces pointed to by `src` and `dest` must not overlap. This requirement applies to almost all C standard library functions that involve pointer parameters.  Each pointer parameter should point to a distinct memory space, and overlapping is not allowed.  However, after the introduction of the `restrict` keyword, stating this explicitly became redundant, and was removed from newer versions of manpages.
For example, the following usage is not permitted:
```c
char buf[10] = "hello";
strcpy(buf, buf+1);
```

The parameter `n` in `strncpy` specifies the maximum number of bytes to be copied from `src` to `dest`. In other words, if the copying reaches a null-terminator (`\0`), it will stop. If the copying reaches the maximum number of bytes specified by `n` without encountering a null-terminator, it will also stop. It is the caller's responsibility to provide an appropriate value for `n` to ensure that the read and write operations do not exceed the allocated boundaries. For instance, setting the value of `n` equal to the size of the memory space pointed to by dest can help achieve this:

```c
char buf[10];
strncpy(buf, "hello world", sizeof(buf));
```

However, this implies a particular outcome. The documentation specifically uses a warning to indicate that this means `dest` may not be null-terminated. For example, in the previous usage, even though `Hello, World!` was truncated and copied to `dest` within its size limit, `dest` is not terminated with a null character (`\0`). If you were to use `printf` with `dest` in this state, it would result in reading beyond the allocated memory. If you need to ensure that `dest` is null-terminated, you can make the following adjustment in your usage:

```c
char buf[10];
strncpy(buf, "hello world", sizeof(buf));
buf[sizeof(buf)-1] = '\0';
```
strncpy has another feature: if the src string is fully copied and there are still fewer than 'n' bytes, the remaining bytes will be filled with '\0'. However, as mentioned above, this does not guarantee that 'dest' will be null-terminated. When the length of the src string exceeds 'n', strncpy does not append any extra '\0' characters, and it also does not copy the null-terminator of the string. The documentation for strcpy(3) is already relatively friendly to read, as it provides a reference implementation. 

The remaining sections are similar to what was discussed above. 



#### cppreference.com Case Study 1: restrict

We haven't really learnt about `restrict` before.  Let's use <cppreference.com> to learn it now. 
When you visit the site <cppreference.com>, you got a search box at the top.  You can type in "restrict" in the search box.  Make sure to select the pages under "C reference" instead of "C++ reference". 
If you do things correctly, you will arrive at <https://en.cppreference.com/w/c/language/restrict>. 

In the title, you saw `restrict` is a type qualifier, and the first paragraph mentioned it should be used as `const` and `volatile` for pointers. 

The functions of the qualifier is described around the first example block, but the example code is what we really need to start at:  `T restrict * p` hints the compiler that if `p` is used to change the values it pointed at, no other `restrict`ed pointers within the same scope can be allowed to access the memory location. 

The Notes section provide extra comment about the qualifier.  One important thing is it explicitly forces "programmer[s to] ensure that the aliasing assertions made by the restrict-qualified pointers are not violated", which is equivalent to what old manpages said for `strcpy`, when the signature was `char *strcpy(char *dest, const char *src);`:  "the  strings  may  not  overlap". 

The section Usage patterns discusses some typical usages of the keyword. 

Like newer version of the manpages, this page has an Example section.  Here, it gives an example of how a compiler may optimize the code. 

The References section tells you where in C standards you can find contents in this page.  (If you are interested, try to read the C standards.)



#### cppreference.com Case Study 2: strcpy

By searching `strcpy`, and select the C reference page, you arrive at <https://en.cppreference.com/w/c/string/byte/strcpy>. 

Like the manpage, the function signatures and description are at the beginning of the page. 

The page has a separate section for parameters, which can facilitate quick lookup. 

Other than these, sections are like what we have seen in recent version of manpages. 


#### Exercises

1. Implement your own `strcpy` function as concisely as possible. Can you write the function body in three lines of code, following the coding style of this book?
2. Write a function that takes a string as input and creates a new string that compresses all consecutive whitespace characters into a single space. Here, whitespace includes spaces, tabs, newlines, and carriage returns. For example, given the following string:
```
This Content hoho       is ok
        ok?

        file system
uttered words   ok ok      ?
end.
```
You should be able to compress it into: 
```
This Content hoho is ok ok? file system uttered words ok ok ? end.
```

The function should have the following interface:
```c
char *shrink_space(char *dest, const char *src, size_t n);
```

The meaning of each parameter and the return value is similar to that of `strncpy`. After completing the function, write a man page for it.
3. The manpage of Archlinux gives a declaration for `strncpy` that looks different from the one given by Ubuntu's: 
```c
// Archlinux
char *strncpy(char dst[restrict .sz], const char *restrict src,
              size_t sz);

// Ubuntu
char *strncpy(char *restrict dest, const char *restrict src, size_t n);
```
The are indeed the same.  Explain why. 

### 1.2. malloc and free

When you need to dynamically allocate memory in a program, what should you do? You can define a buffer array like in the previous section. However, this method is not flexible enough. C89 requires that arrays defined must have a fixed length, but in many cases, the program only knows the size of the memory to be dynamically allocated at runtime.  
For example:

```c
void foo(char *str, int n)
{
    char buf[?];
    strncpy(buf, str, n);
    ...
}
```

The variable n is passed as a parameter, and its value is not known in advance. So, how should `buf` be defined? In Section 1, "Basic Concepts of Arrays," we discussed the VLA feature introduced by C99, which allows defining `char buf[n+1] = {};` to ensure that `buf` is null-terminated (`\0`). However, even with VLA, it is still not flexible enough because VLAs are dynamically allocated on the stack and need to be freed when the function returns. What if we want to dynamically allocate a block of memory that can be accessed by various functions throughout the program? Since global arrays cannot be defined as VLAs, this requirement cannot be met.
Also, the size of stack is only several MiB.  If you need to put more data, you still need to find somewhere else to put the contents. 

In fact, in Chapter 20 Section 5, "Virtual Memory Management," it was mentioned that a process has a heap space, and the C standard library function `malloc` can dynamically allocate memory on the heap. Its underlying implementation uses the `brk` system call to request memory from the operating system. Once the dynamically allocated memory is no longer needed, it can be freed using `free`, or more precisely, returned to `malloc`, so that the memory can be allocated again when `malloc` is called next time. This section will study the usage and working principles of these two functions.

```c
#include <stdlib.h>

void *malloc(size_t size);
// Returns: On success, returns the address of the allocated memory space. On failure, returns NULL.

void free(void *ptr);
```

The parameter size in `malloc` represents the number of bytes to allocate. If the allocation fails (possibly due to system memory exhaustion), `malloc` returns `NULL`. Since `malloc` does not know what type of data the user will store in the allocated memory, it returns a generic pointer `void *`. The user program can convert it to another pointer type to access the allocated memory. `malloc` guarantees that the pointer it returns satisfies the alignment requirements of the system. For example, on a 32-bit platform, the returned pointer is always aligned to a 4-byte boundary, ensuring that the user program can convert it to any type of pointer.

Once the dynamically allocated memory is no longer needed, it can be freed using `free`, with the parameter being the memory block's address previously returned by `malloc`. Here is an example:
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
	int number;
	char *msg;
} unit_t;

int main(void)
{
	unit_t *p = malloc(sizeof(unit_t));

	if (p == NULL) {
		printf("out of memory\n");
		exit(1);
	}
	p->number = 3;
	p->msg = malloc(20);
	strcpy(p->msg, "Hello world!");
	printf("number: %d\nmsg: %s\n", p->number, p->msg);
	free(p->msg);
	free(p);
	p = NULL;

	return 0;
}
```

Regarding this program, the following points should be noted:

- The line `unit_t *p = malloc(sizeof(unit_t));` assigns a memory block of size `sizeof(unit_t)` using `malloc`. The right side of the assignment is of type `void *`, and the left side is of type `unit_t *`. The compiler performs implicit type conversion between `void *` and any pointer type.
- Although running out of memory is a rare error, it is good programming practice to check whether `malloc` succeeded. Most system functions you will learn in the future have a return value indicating success or failure. It is essential to check the return value every time you call a system function.
- After `free(p);`, the memory space pointed to by `p` is deallocated. However, the value of `p` itself doesn't change because, from the perspective of the `free` function's interface, it cannot modify the value of `p`. The memory space pointed to by `p` no longer belongs to the user, which means `p` becomes a dangling pointer. To avoid dangling pointers, it is recommended to manually set `p = NULL;` after `free(p);`.
- It is important to free `p->msg` before freeing `p`. If `p` is freed first, it becomes a dangling pointer, and accessing memory through `p->msg` would not be possible (indeed, the behaviour is undefined).

The provided example follows a simple sequential control flow: allocate memory, assign values, print, release memory, and exit the program. In this case, even if you don't use `free` to release memory, it is not necessary problematic, because when the program exits, the entire process's address space, including the heap space, will be released, and all the memory used by the process will be returned to the operating system. However, if a program runs for a long time (e.g., a network server program) and calls `malloc` to allocate memory within a loop or recursion, it is necessary to pair it with `free`. Each allocation should be followed by a corresponding deallocation; otherwise, memory will be allocated in each iteration without being released, gradually depleting the system's memory. This error is known as a memory leak. Additionally, it is crucial to save the pointer returned by `malloc` because only that pointer can be passed to `free` to release the allocated memory. If the pointer is lost, there is no way to free that memory, resulting in a memory leak. For example:

```c
void foo(void)
{
    char *p = malloc(10);
    // ...
}
```

When `foo` function returns, the memory space of the local variable `p` should be released,
but the memory address it points to is lost, and those 10 bytes cannot be freed.
Memory leaks are difficult to identify as they do not cause immediate program errors like
accessing out-of-bounds memory. While a small memory leak may not affect the program's
correct operation, a significant memory leak can cause memory shortage in the system,
leading to frequent paging, affecting not only the current process but the entire system's performance.

There are a few special cases regarding `malloc` and `free`. Calling `malloc(0)` is legal and will return a non-NULL pointer. However, you cannot access memory through this pointer. Calling `free(NULL)` is also legal and does nothing. However, freeing a dangling pointer is illegal. For example, calling `malloc` once to get a pointer `p` and then calling `free(p);` twice in a row would result in a runtime error.

Chapter 8.7 of [K&R] provides a simple implementation of `malloc` and `free` based on a circular linked list. If you haven't learned about linked lists yet, it might be challenging to understand that code. Let me simplify it further with the following diagram to help you understand the working principle of `malloc` and `free`. The actual implementation in libc is much more complex, but the basic working principle remains the same. Once you understand the basic working principle, it becomes easier to analyze various bugs encountered while using `malloc` and `free`.

![Diagram for an implementation of malloc](images/interface.malloc.png)

The boxes with a white background in the diagram represent the free memory blocks managed by `malloc`, while the boxes with a dark background are not under `malloc`'s control. They may either be memory blocks already allocated to the user or memory blocks that do not belong to the current process. The addresses above the `brk` do not belong to the current process and require the `brk` system call to request memory from the kernel. Each memory block begins with a header node containing a pointer field and a length field. The pointer field links all the header nodes of free blocks together, forming a circular linked list. The length field indicates the total length of the header node and the subsequent memory blocks, measured in units of 8 bytes (the length of a header node).

- Initially, the heap space consists of a single free block with a length of 7 x 8 = 56 bytes. The length of the block, excluding the header node, is 48 bytes.
- Calling `malloc` to allocate 8 bytes will split the end of the free block, creating a new header node of 8 bytes and returning 8 bytes to the user. It's important to note that the pointer `p1` points to the memory block after the header node.
- Calling `malloc` again to allocate 16 bytes will split the end of the free block similarly to the previous step.
- Calling `free` to release the memory block pointed to by `p1` returns the memory block (including the header node) to `malloc`. At this point, `malloc` manages two disjoint memory blocks linked together in a circular linked list. It's worth mentioning that `p1` becomes a dangling pointer, pointing to memory that does not belong to the user. The memory pointed to by `p1` is below the `brk` and belongs to the current process. Accessing `p1` will not result in a segmentation fault, but the accessed memory may have been reallocated by `malloc`, leading to unexpected data. Additionally, it's important to note that if `p2` writes beyond the right boundary, it may overwrite the adjacent header node and disrupt the circular linked list managed by `malloc`, causing it to lose track of the free blocks.
- Calling `malloc` to allocate 16 bytes results in two disjoint free blocks, each with 8 bytes available for allocation. Since the blocks are not contiguous, `malloc` has to increase the `brk` through a system call to obtain new memory. In the [K&R] implementation, the `sbrk` function requests 1024 x 8 = 8192 bytes each time. Although on Linux systems, the `sbrk` function is implemented using `brk`, for the sake of simplicity in this diagram, let's assume each call to `sbrk` requests 32 bytes and creates a new free block.
- The newly allocated free block and the previous free block are contiguous, allowing them to be merged into a single block. It's important to merge blocks whenever possible to prevent the fragmentation of free blocks and ensure they can satisfy larger allocation requests.
- Splitting the end of the merged block results in a new header node of 8 bytes and returns 16 bytes to the user.
- Calling `free(p3)` releases this memory block. Since it is contiguous with the previous free block, they are merged again into a single free block. Note that the `brk` can only be increased and not decreased, so any memory obtained from the kernel will remain under `malloc`'s management, even when calling `free`.

### Exercise

1. Write a small program to exhaust system memory. Observe how much memory needs to be allocated before allocation fails. What happens after memory exhaustion? Will the system crash?

## 2. Input and output parameters.  

If a function interface has pointer parameters, the pointer can either be used to pass data to the function (called an input parameter) or to return data to the caller (called an output parameter). For example, the `src` parameter of `strcpy` is an input parameter, while the `dest` parameter is an output parameter. Some functions have pointer parameters that serve both roles, such as the `fd_set *` parameter of `select(2)`. This is called a value-result parameter.

Let's take a look at the example `void func(const unit_t *p);`, where `p` is an input parameter: 
- The caller 
    1. allocates memory space pointed to by `p`, 
    2. saves data in the memory space, and then 
    3. calls the function. Because of the `const` qualifier, the caller can be sure that the memory space pointed to by `p` will not be changed.
- The implementer
    1. defines the type of the pointer is `unit_t *`, and 
    2. read the memory location pointed by `p`.

Now, consider the declaration `void func(const int p);`.  Is `const` here meaningful? 

Now, let's use `void func(unit_t *p);` as an example for output parameters. 
- The caller 
    1. allocates memory space pointed to by `p`, 
    2. calls the function, and then 
    3. reads the memory space pointed to by `p`.
- The implementer
    1. defines the type of the pointer is `unit_t *`, and 
    2. save data into memory location pointed by `p`.

Consider the same declaration `void func(unit_t *p);` again, but `p` is an value-result parameter this time.   Then, 
- The caller 
    1. allocates memory space pointed to by `p`, 
    2. saves data in the memory space, and then 
    3. calls the function. 
    4. reads the memory space pointed to by `p`.
- The implementer
    1. defines the type of the pointer is `unit_t *`, 
    2. read the memory location pointed by `p`, and 
    2. save data into memory location pointed by `p`.. 

It is important to document whether a function parameter is an output parameter or a value-result parameter, as their function interfaces are identical.

The following is a complete example of an output parameter:

```c
/* populator.h */
#ifndef POPULATOR_H
#define POPULATOR_H

typedef struct {
     int number;
     char msg[20];
} unit_t;

extern void set_unit(unit_t *);

#endif
```
```c
/* populator.c */
#include <string.h>
#include "populator.h"

void set_unit(unit_t *p)
{
     if (p == NULL)
          return; /* ignore NULL parameter */
     p->number = 3;
     strcpy(p->msg, "Hello World!");
}
```
```c
/* main.c */
#include <stdio.h>
#include "populator.h"

int main(void)
{
     unit_t u;

     set_unit(&u);
     printf("number: %d\nmsg: %s\n", u.number, u.msg);
     return 0;
}
```

Some system functions have special rules for pointer parameters that are `NULL`. If an input parameter is `NULL`, it may indicate a default value or no special treatment (e.g. `free`), or default values should be assumed (e.g. `pthread_attr_t *` in `pthread_create`). If an output parameter is `NULL`, it may indicate that the caller does not need to receive a value (e.g. `time`). These special rules should be clearly documented. 

# Part IV From source code to running programs

This part discusses how a source code file may be turned into a running program.  We will discuss preprocessing, compilation, and liking in this part.  To understand compilation and linking, we have to discuss assembly.  Song originally used x86 assembly as examples.  Since x86 is effectively an obsolete now platform, we adapt his code for x86_64. 


TODO: introduce scope, name space and storage class specifier (and storage duration).  
Then state linkage (which shall be defined in Chap20S02)  Linkage was defined in [C89 3.1.2.2], [C11 6.2.2]  Or maybe explain 6.2 instead


TODO: demonstrate a step-by-step compilation, and linking here. 

TODO: sections of executable files and memory. 

TODO put talks about GLOBAL, LOCAL in symbol tables in Chapter 20. 


TODO: quick reference guide

- Declaration, definition and initialization
    - Chapter 17a (second half)
    - Section 20.2


# Chapter 17a Storage- and linking-related concepts of C identifiers

To provide readers with more smooth experience reading Part IV of the book, we shall introduce some C language concepts about storage and linking, including scopes, linkage, name spaces and storage durations in this chapter.  It is worth noting that concepts in this chapter are still concepts in the C language, although they are very closely related to concepts in other chapters of this part.  For example, "linkages of identifiers" in C defines the visibility of an identifier, but the linkages are (partly) implemented using symbol tables in the linking process.  This chapter is intended to be a gentle introduction of Section 6.2.1 - 6.2.4 of [C11].  Interested readers refer to [C11] instead.  Many contents of this chapter are taken from Section 19.3 from Song's book.

Before we talk about the concepts, we shall first talk about where these concepts will be applied.  Scopes, linkages and name spaces apply to _identifiers_, but storage durations only applied to _objects_.  An **identifier** can be an _object_ (a variable, an array, etc.), a _function_, a _type name_ [Note A], a member of a `struct`, `union` or `enum`, a label name, a macro name or a macro parameter. 

The following program will be used throughout this chapter: 

Example 17a.1
```c
#include <stdio.h>

const int A = 10;
int a = 20;
static int b = 30;
int c;

typedef struct my_struct {                // (a)
    int a;
    struct my_struct *next;               // (b)
} a_t;


int sum (int length, int arr[length]);    // Function declaration

int sum (int length, int arr[length]) {   // Function definition
    int acc = 0;
    for (int i=0; i < length; i++) {
        acc += arr[i];
    }
    return acc;
}

int main(void) {
    static int a = 40;
    char b[] = "Hello world";
    register int c = 50;

    printf("Hello world %d\n", c);

    return 0;
}
```

In the past, we used the concepts of "global variables" and "local variables" to distinguish variables mainly based on their scope. However, these two concepts are too broad for classifying variables, and we need to further refine them. Let's summarize the related C syntax.  The **scope** in C language can be divided into the following categories:

- _Function Scope_: The identifier is valid throughout the entire function. Only labels have function scope, and all labels have such scope.  Labels in the function do not need to be declared before use. You can use a `goto` statement to jump to a certain label later in the same function.
- _File Scope_: The identifier is valid from its declaration position to the end of this program file [Note 30]. For example, `A, a, b, c` outside the `main` function in the above example have file scope, and main itself also has file scope. `printf` is actually declared in `stdio.h` and is included in this program file, so it is also in the file scope.
- _Block Scope_: The identifier is valid from its declaration position to the end of the nearest enclosing block. For example, `a`, `b` and `c` in the main function.  Plus, (formal) parameters of functions (like `length` and `arr` in `sum`'s definition) also have block scope.
- _Function Prototype Scope_:  If an identifier appears in a function declaration, then the identifier is accessible since its declaration to the end of the function declaration.  For example, `length` and `arr` in `sum`'s declaration. 
- Special case for tags [Note A]:  Consider the example `struct` definition in Example 17a.1, although the type definition of a `struct` ends at the semicolon, the identifier `my_struct` is usable right after its appearance.  This is necessary for constructing a linked list structure. 


If we modify line (a) in Example 17a.1 to `typedef struct A {` and line (b) accordingly, the code still compiles, although there are two things called `A` in the same scope.  In general, no identifiers in the same name space and share the same scope can have the same name.  If two identifiers have the same name and are in the same name space but have different scope, the outer one will be shadowed by the inner one. So why this works?
This is because of _tags_ and variables are in different _name spaces_.  For simplicity, the C standard only defines four (groups) name spaces: 
1. Label names
2. Tags (tags of `struct`, `union` and `enum` shares the same space)
3. the member of each `struct` or `union`.  Each `struct` or `union` has its own name space for its members. 
4. _Ordinary identifiers_, which includes everything else.  If there are duplicate names, macro definitions override all other identifiers because they are processed in the preprocessing stage, not the compilation stage. Apart from macro definitions, other types of identifiers are processed according to the rules mentioned above, where the inner scope overrides the outer scope.

In [C11], **linkage** means the process of the compiler recognizing an identifier declared multiple times as the same identifier.  An identifier may has external linkage, internal linkage and no linkage: 
- **External linkage**: Suppose the final executable file is compiled from multiple program files.  All declaration of an identifier with a particular name refer to the same thing, if the identifier has external linkage.
- **Internal linkage**: On the other hand, if an identifier has internal linkage, all declaration of it inside the same file refer to it, but another source file may have a distinct object/function with the same name. 
- **No linkage**:  If an identifier has no linkage, every declaration declares a distinct identifier.

- Only objects and functions may have external and internal linkage.  All other identifiers have no linkage. 
- A function has internal linkage, if it is defined with the `static` keyword in the file scope. 
- A function has external linkage, if it is not defined with the `static` keyword in the file scope.  For example, the following declarations are exactly equivalent: 
```c
extern void foo (void);
void foo (void);
```

Due to the complexity of the language in variables' linkages and their relation with linking, the discussion is delayed to Chapter 20. 


Next, we shall introduce the five **storage class specifiers**.  The five keywords are used to modify variable and function declarations:

1. `static`: When used to modify a variable, it means that the storage space for the variable is statically allocated. In extra, when used to modify a file scope variable or function, it gives them internal linkage.
2. `auto`: Variables modified with `auto` have their storage space automatically allocated on the stack when the function is called, and automatically released when the function returns. For example, the variable `b` in the main function is actually modified with `auto`, but `auto` can be omitted.  This is why people never really saw the keyword `auto` in C [Note C]. `auto` cannot be used to modify file scope variables.
3. `register`: The compiler is requested to allocate a dedicated register to store variables modified with register. 
However, the compiler need not to satisfy the request.  If it cannot allocate a register, the compiler will treat it as an `auto` variable. `register` cannot be used to modify file scope variables. 
Since using the keyword explicitly request the compiler _not to assign a memory address_ for the variable, the address of a `register` variable cannot be taken. 
Nowadays, the optimization of most compilers is very good, they will try to effectively use the CPU's registers, so the register keyword is less used.
4. `extern`: As mentioned above, the linkage attribute is classified based on whether a multiple-declared identifier represents the same variable or function. The `extern` keyword is used for multiple declarations of the same identifier. Its usage will be detailed in Chapter 20.
5. `typedef`: This keyword, discussed in Chapter 16 Section 2.4 "`sizeof` Operator and `typedef` Type Declaration", is not used to modify variables, but to define a type name. As explained in that section, to understand a `typedef` declaration, first remove `typedef` and consider it as a variable declaration. Then, see what type the variable is, and that's the type defined by `typedef`. In other words, `typedef` appears in the same position in the syntax structure as the previous few keywords, also modifying variable declarations. Therefore, from a syntactic (not semantic) perspective, it is classified together with the previous few keywords.

Unlike the `const` keyword, which may appear more than one times in a variable definition and plays different roles, at most one storage-class specifier is allowed to appear in a definition definition, it must only appear at most once, and it should always be at the beginning of the definition [Note B]. 
For example, the following definition makes sense: 
```c
int * const * ppa;
```
The pointer `ppa` points to a pointer that points to an integer.  The integer-pointer `*ppa` must not be changed, but both `ppa` and `**ppa` may be changed.  However, the following does not make sense: 
```c
int * extern * ppb;
```
The pointer `ppb` only points to a _memory location_, not an _identifier_. 
The compiler has no interest in knowing whether the object that `ppb` points to has external linkage or not. 
Similarly, the `register` keyword in the following statement must be interpreted in a different way than `const`: 
```c
register int *pa;
```
This requests the compile to store `pa` into a register, instead of storing `*pa` into a register.  Moreover, storing `*pa` into a register is impossible, as a pointer must point to a memory address, but a register does not have one. 

Although it seems to also modify a variable declaration, the positions where const is allowed to appear in the syntax structure in more complex declarations to be introduced later are not exactly the same as those of the Storage Class Specifier. 

`const` (introduced in Chapter 23), along with the `restrict` (introduced in Chapter 24) and `volatile` (to be introduced in Chapter  19) are in another category of syntax elements, called **type qualifiers**, also known as **cvr qualifiers** (or **cv qualifiers** before the introduction of `restrict`). 


The **lifetime of a variable**, also known as its **storage duration**, can be classified into the following categories:
1. **Static Storage Duration**: Variables with external or internal linkage attributes, or (local/block scope) variables modified by the `static` keyword, are allocated and initialized once when the program starts executing, and then exist until the program ends. These variables are usually located in the `.rodata`, `.data`, or `.bss` sections. For example, the variables `A, a, b, c` outside the `main` function, and the variable a inside the `main` function in the previous example.
2. Automatic Storage Duration: Variables that have no linkage attribute and are not modified by the static keyword have automatic storage duration. These variables are allocated on the stack or in registers when entering the block scope, and are released when exiting the block scope. For example, the variables b and c inside the main function in the previous example.
3. **Allocated Storage Duration**: The memory space allocated separately, e.g. using `malloc` have allocated storage duration.  Programmers must manually allocate and deallocate them. 



- [Note A]:  There are two different "type names" in C. 
```c
typedef struct my_struct {
    int a;
} a_t;
```
The identifier `my_struct` is called a _tag_ here, and `a_t` is called a `typedef` name.  We don't make such strict differentiation in other parts of this book. 
- [Note B]: I used the word "should" here, as both of the followings are syntactically correct, but the second one is rather confusing: 
```c
typedef int A;
int typedef B;
```
- [Note C]: In C++, the story is different.  There, the `auto` keyword requests the compiler to infer the type of a variable. 


- [Note 30]: For easy reading, I used the term "program file" here, which is not strict. If there is a file `a.c` that includes `b.h` and `c.h`, then what I call a "program file" refers to the code generated after preprocessing `b.h` and `c.h` in `a.c`, which is called a _translation unit_ in the C standard. Each translation unit can be compiled into a `.o` object file, and finally these object files are linked together by the linker to become an executable file. The C standard uses a lot of very unpopulist terms. In addition to the translation unit, compilers are called translators, variables are called objects. Other chapters of this book will not use these terms because I am not writing the C standard. 

# Chapter 21 Preprocessing

## 1. Steps of Preprocessing

Now we will comprehensively understand the preprocessing steps that the C compiler takes before parsing syntax:

1. Replace trigraphs mentioned in the "Constants" section of [Chapter 2](ch02s02.html) with their corresponding single characters.

2. Concatenate multi-line code that uses the \ character to continue onto a single line. For example:
```c
#define STR "hello, "\
		"world"
```
After this preprocessing step, the code becomes:
```c
#define STR "hello, " "world"
```
This method of continuation requires that the `\` character be immediately followed by a newline, with no other whitespace in between.

3. Replace comments (whether single-line or multi-line) with a single space.

4. After the previous two steps, some newlines have been removed. Some were removed during the continuation process, while others were removed along with multi-line comments. The remaining lines of code are called logical code lines. The preprocessor then divides these logical code lines into tokens and whitespace characters. At this point, the tokens are called preprocessing tokens, which include identifiers, integer constants, floating-point constants, character constants, strings, operators, and other symbols. Continuing with the previous example, the two source code lines are concatenated into a single logical code line, which is then divided into the following tokens and whitespace characters: `#`, `define`, space, `STR`, space, `"hello, "`, tab, tab, `"world"`.

5. Identify preprocessing directives within the tokens and perform the appropriate preprocessing actions. If an `#include` directive is encountered, include the corresponding source file and perform steps 1-4 on it. If a macro definition is encountered, perform macro expansion.  
We first learned about preprocessing directives in the [Array Application Example: Random Number Statistics (Chapter 9 Section 2)](ch08s02.html) section. Here is the strict definition of a preprocessing directive: it consists of a single logical code line that begins with `#`, followed by one or more preprocessing tokens. The only whitespace characters allowed within a preprocessing directive are spaces and tabs.

6. Identify escape sequences within character constants or strings and replace them with the corresponding bytes. For example, replace `\n` with the byte 0x0a.

7. Concatenate adjacent strings. Continuing with the previous example: 
```c
printf(
	STR);
```
The code will be processed to the following tokens after step 4: `printf`, `(`, newline, tab, `STR`, `)`, `;`, newline. 
After macro expansion in step 5, this becomes: `printf`, `(`, newline, tab, `"hello, "`, tab, tab, `"world"`, `)`, `;`, newline. 
Then, adjacent strings are concatenated to form the following tokens: `printf`, `(`, newline, tab, `"hello, world"`, `)`, `;`, newline.

8. After the previous steps, discard all whitespace characters and pass the tokens to the C compiler for syntax parsing. At this point, the tokens are no longer preprocessing tokens, but are instead called C tokens. The whitespace characters that are discarded include spaces, newlines, horizontal tabs, vertical tabs, and form feeds. Continuing with the previous example, the tokens passed to the C compiler for syntax parsing are: `printf`, `(`, `"hello, world"`, `)`, `;`. Note that a preprocessing directive written across multiple lines must use `\` to continue onto the next line, because by definition, a preprocessing directive consists of a single logical code line. In contrast, C code can be written across multiple lines without using `\`, because newlines are simply whitespace characters and are discarded during syntax parsing.


### Demonstration

The command `cpp` stands for C Pre-Processor, and can be used for performing preprocessing of the code.  Take the code from Chapter 11 Section 6 _Binary search_ for an example, we may explicitly request preprocessing the code using the following bash command (the code is at the end of the section): 
```bash
cpp binary_search.c  -o binary_search_pp.c
```

In the generated file, you will first see the contents of `stdio.h` and `assert.h`.  Then other contents follows.  If the preprocessor decides to put a logical line into multiple "physical" lines, a "comment" like `# 41 "binary_search.c" 3 4` will proceed each physical line inside the logical line. 

The line 
```c
int a[LEN] = { 1, 2, 2, 2, 5, 6, 8, 9 };
```
is replaced by 
```c
int a[8] = { 1, 2, 2, 2, 5, 6, 8, 9 };
```


### Appendix

The code in `binary_search.c`: 

```c
#include <stdio.h>
#include <assert.h>

#define LEN 8
int a[LEN] = { 1, 2, 2, 2, 5, 6, 8, 9 };

int is_sorted(void)
{
	int i;
	for (i = 1; i < LEN; i++)
		if (a[i-1] > a[i])
			return 0;
	return 1;
}

int mustbe(int start, int end, int number)
{
	int i;
	for (i = 0; i < start; i++)
		if (a[i] == number)
			return 0;
	for (i = end+1; i < LEN; i++)
		if (a[i] == number)
			return 0;
	return 1;
}

int contains(int n)
{
	int i;
	for (i = 0; i < LEN; i++)
		if (a[i] == n)
			return 1;
	return 0;
}

int binarysearch(int number)
{
	int mid, start = 0, end = LEN - 1;

	assert(is_sorted()); /* Precondition */
	while (start <= end) {
		assert(mustbe(start, end, number)); /* Maintenance */
		mid = (start + end) / 2;
		if (a[mid] < number)
			start = mid + 1;
		else if (a[mid] > number)
			end = mid - 1;
		else {
			assert(mid >= start && mid <= end
			       && a[mid] == number); /* Postcondition 1 */
			return mid;
		}
	}
	assert(!contains(number)); /* Postcondition 2 */
	return -1;
}

int main(void)
{
	printf("%d\n", binarysearch(5));
	return 0;
}
```



TODO: demo cpp 



## 2. Macro definition

### 2.1. Function-like Macro Definition

In larger projects, a large number of macro definitions are used to organize code. You can see how many macro definitions are used in the header files under `/usr/include`. It seems that macro expansion is just a replacement, but in fact there are more complex rules inside. C language has many complex but not commonly used syntax rules that are not covered in this book, but this section attempts to provide a comprehensive explanation of the syntax rules related to macro expansion, because it is very important and commonly used.

The macro definitions we have used before, such as `#define N 20 or #define STR "hello, world"`, can be called object-like macro definitions (because it defines some "constants"). The macro definition name can be used in the code like a (constant) variable. Another type of macro definition can be used in the code like a function call, called function-like macro definition. For example, we may put following lines in `main.c`:
```c
#define MAX(a, b) ((a)>(b)?(a):(b))
k = MAX(i&0x0f, j&0x0f)
```
We want to see what the expression in the second line looks like when expanded. We can use the `gcc` option `-E` or the `cpp` command. Although this C program is not syntactically correct, it doesn't matter. We only do preprocessing without compiling, so the program will not be checked for C syntax.
```c
$ cpp main.c
# 1 "main.c"
# 1 "<built-in>"
# 1 "<command-line>"
# 1 "main.c"

k = ((i&0x0f)>(j&0x0f)?(i&0x0f):(j&0x0f))
```

1. The parameters of the function-like macro definition have no type. The preprocessor is only responsible for formal replacement, not parameter type checking. Therefore, be extra careful when passing parameters.
2. The code generated by calling a real function and the code generated by calling a function-like macro definition are different. If `MAX` is a real function, its function body return `a > b ? a : b;` needs to be compiled to generate instructions, and each call in the code also needs to be compiled to generate parameter passing instructions and call instructions. If `MAX` is a function-like macro definition, the macro definition itself does not need to be compiled to generate instructions, but each call in the code generates instructions equivalent to a function body, rather than simple parameter passing instructions and call instructions. Therefore, the target file generated by compiling with function-like macro definitions will be relatively large.
3. Be extra careful when defining this type of macro. If the definition is written as #define `MAX(a, b) (a>b?a:b)`, omitting the inner parentheses, the macro expansion becomes `k = (i&0x0f>j&0x0f?i&0x0f:j&0x0f)`, and the operator precedence is wrong. Similarly, the outer parentheses of this macro definition cannot be omitted. Think about why.
4. When calling a function, the value of the actual parameter expression is first calculated and then passed to the formal parameter. If the actual parameter expression has a side effect, then these side effects occur only once. For example, `MAX(++a, ++b)`, if `MAX` is a real function, `a` and `b` only increase once. But if `MAX` is defined as a function-like macro, it will be expanded into `k = ((++a)>(++b)?(++a):(++b))`, and a and b may increase once or twice.
5. Even if the actual parameters have no side effects, using function-like macro definitions often leads to lower code execution efficiency. Here is an extreme and interesting example: 
```c
#define MAX(a, b) ((a)>(b)?(a):(b))

int a[] = { 9, 3, 5, 2, 1, 0, 8, 7, 6, 4 };

int max(int n)
{
	return n == 0 ? a[0] : MAX(a[n], max(n-1));
}

int main(void)
{
	max(9);
	return 0;
}
```

The time complexity of the algorithm for finding the maximum number in an array using a function-like macro definition for `MAX` depends on the how we implement `MAX`. If `MAX` is a real function, the time complexity will still be $\Theta(n)$, as the algorithm will traverse the array from beginning to end.  However, `MAX` is a function-like macro definition here.  Think about what's the time complexity of `max`. 

Although function-like macro definitions have many disadvantages compared to real functions, they can significantly improve code execution efficiency as long as they are used carefully. After all, they eliminate a series of tasks such as allocating and releasing stack frames, passing parameters, and returning values.  (Paul: This was a very serious issue on x86, as arguments and return value are passed using stack.  On x86_64, the issue is less severe, as most parameters are passed using registers, and the compiler is able to optimize out many redundant stack/register operations on leaf functions.  Moreover, now we have `inline` functions, which further reduces the need for function-like macros)   Therefore, function-like macro definitions are often used to replace the implementation of short and frequently called functions. For example, many functions in the C standard library provide two implementations, one is a real function implementation, and the other is a macro definition implementation, which will be explained in detail later.

Function-like macro definitions are often written in the following form (taken from the kernel code `include/linux/pm.h`):
```c
#define device_init_wakeup(dev,val) \
        do { \
                device_can_wakeup(dev) = !!(val); \
                device_set_wakeup_enable(dev,val); \
        } while(0)
```

Why use `do { ... } while(0)` to enclose it? What problems will arise if it is not enclosed?
Consider the following usage: 
```c
#define device_init_wakeup(dev,val) \
                device_can_wakeup(dev) = !!(val); \
                device_set_wakeup_enable(dev,val);

if (n > 0)
	device_init_wakeup(d, v);
```
After the macro is expanded, the second statement of the function body is not in the if condition. Can't it be simply enclosed in a statement block with `{ ... }`?
```c
#define device_init_wakeup(dev,val) \
                { device_can_wakeup(dev) = !!(val); \
                device_set_wakeup_enable(dev,val); }

if (n > 0)
	device_init_wakeup(d, v)   // No semicolon here!
else
	continue;
```
The problem lies in the semicolon at the end of `device_init_wakeup(d, v);`. If this semicolon is not allowed, it does not look like a function call, but if this semicolon is written, there will be a syntax error after macro expansion, and the `if` statement will end with this semicolon, making it impossible to match with `else`. 

If a macro is defined multiple times in a program file, C language requires that these duplicate macro definitions must be exactly the same. For example, the following duplicate definition is allowed:

```c
#define OBJ_LIKE (1 - 1)
#define OBJ_LIKE /* comment */ (1/* comment */-/* comment */  1)/* comment */
```

Extra whitespace (spaces, tabs, comments) before or after the definition does not matter, and having more or less whitespace within the definition also does not matter. However, having whitespace or not having whitespace within the definition is considered different, so the following duplicate definition is not allowed:

```c
#define OBJ_LIKE (1 - 1)
#define OBJ_LIKE (1-1)
```

If you need to redefine a macro that is different from the original definition, you can first use #undef to cancel the original definition, and then redefine it, for example:

```c
#define X 3
... /* X is 3 */
#undef X
... /* X has no definition */
#define X 2
... /* X is 2 */
```

### 2.2 Inline functions

TODO: consider moving this section to the chapter regarding linking. 

C99 introduced a new keyword inline for defining inline functions. This usage is very common in kernel code, such as in `include/linux/rwsem.h`:

```c
static inline void down_read(struct rw_semaphore *sem)
{
        might_sleep();
        rwsemtrace(sem,"Entering down_read");
        __down_read(sem);
        rwsemtrace(sem,"Leaving down_read");
}
```

The inline keyword hints the compiler that the function call should be as fast as possible and can be implemented as a normal function call or as a macro expansion.  However, compilers do not need to satisfy the request for inlining.  Modern compilers may ignore the inline request even if the `inline` keyword is presented, or inline a function even if the keyword is not presented.  While macros are _expected_ to be put in a header file, inline functions _may_ be put in a header file.  (In fact, only `inline` and `static` functions can be put in a header file, without causing problems when included in multiple `.c` files.  Think about why.)

Let's do an experiment and modify the example from the previous section:

```c
inline int MAX(int a, int b)
{
	return a > b ? a : b;
}

int a[] = { 9, 3, 5, 2, 1, 0, 8, 7, 6, 4 };

int max(int n)
{
	return n == 0 ? a[0] : MAX(a[n], max(n-1));
}

int main(void)
{
	max(9);
	return 0;
}
```

When compiled with no optimization, modern `gcc` will fail, saying ``undefined reference to `MAX'``.  This is because `gcc` will _not_ inline a function unless optimization is turned on [Note A].  However, the compiler is still hoping to find an actual function implementation when making the function call.  To verify this, let's take a look at the assembly code: 
```bash
gcc inline.c -S inline.s
```
```assembly
	.globl	max
	.type	max, @function
max:
.LFB1:
	.cfi_startproc
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	subq	$16, %rsp
	movl	%edi, -4(%rbp)
	cmpl	$0, -4(%rbp)
	jne	.L2
	movl	a(%rip), %eax
	jmp	.L4
.L2:
	movl	-4(%rbp), %eax
	subl	$1, %eax
	movl	%eax, %edi
	call	max
	movl	%eax, %edx
	movl	-4(%rbp), %eax
	cltq
	leaq	0(,%rax,4), %rcx
	leaq	a(%rip), %rax
	movl	(%rcx,%rax), %eax
	movl	%edx, %esi
	movl	%eax, %edi
	call	MAX@PLT
.L4:
	leave
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
```
Unless a `inline` function is specified with either internal linkage (using `static`) or a external linkage (using `extern`), it has _no linkage_, i.e., there is no actual code block implementing the function.  This is the reason for the linkage error.  To compile the code without optimization, add one of the following lines at the beginning of the source code file to assign the function some linkage: 
```c
static inline int MAX(int a, int b);
```
```c
extern inline int MAX(int a, int b);
```

Now, let's see what happen if we turn on optimization for function inlining: 
```bash
gcc inline.c -o inline_g -Og -g
objdump -dS inline_g
```
```assembly
# If we use static qualifier, the MAX function will be optimized out. 
int max(int n)
{
	return n == 0 ? a[0] : MAX(a[n], max(n-1));
    1119:	85 ff                	test   %edi,%edi
    111b:	75 07                	jne    1124 <max+0xb>
    111d:	8b 05 fd 2e 00 00    	mov    0x2efd(%rip),%eax        # 4020 <a>
}
    1123:	c3                   	ret
{
    1124:	53                   	push   %rbx
    1125:	89 fb                	mov    %edi,%ebx
	return n == 0 ? a[0] : MAX(a[n], max(n-1));
    1127:	8d 7f ff             	lea    -0x1(%rdi),%edi
    112a:	e8 ea ff ff ff       	call   1119 <max>
    112f:	48 63 db             	movslq %ebx,%rbx
	return a > b ? a : b;
    1132:	48 8d 15 e7 2e 00 00 	lea    0x2ee7(%rip),%rdx        # 4020 <a>
    1139:	8b 14 9a             	mov    (%rdx,%rbx,4),%edx
    113c:	39 d0                	cmp    %edx,%eax
    113e:	0f 4c c2             	cmovl  %edx,%eax
}
    1141:	5b                   	pop    %rbx
    1142:	c3                   	ret
```
We can see that, there is no `call` instruction on `MAX`, and the statements of `MAX` was mixed with (inlined into) `max`. 

Now, let's see what will happen if we remove `inline`.  If we still compile with `-Og`, `max` will like this: 
```assembly
int max(int n)
{
	return n == 0 ? a[0] : MAX(a[n], max(n-1));
    1121:	85 ff                	test   %edi,%edi
    1123:	75 07                	jne    112c <max+0xb>
    1125:	8b 05 f5 2e 00 00    	mov    0x2ef5(%rip),%eax        # 4020 <a>
}
    112b:	c3                   	ret
{
    112c:	53                   	push   %rbx
    112d:	89 fb                	mov    %edi,%ebx
	return n == 0 ? a[0] : MAX(a[n], max(n-1));
    112f:	8d 7f ff             	lea    -0x1(%rdi),%edi
    1132:	e8 ea ff ff ff       	call   1121 <max>
    1137:	89 c6                	mov    %eax,%esi
    1139:	48 63 db             	movslq %ebx,%rbx
    113c:	48 8d 05 dd 2e 00 00 	lea    0x2edd(%rip),%rax        # 4020 <a>
    1143:	8b 3c 98             	mov    (%rax,%rbx,4),%edi
    1146:	e8 ce ff ff ff       	call   1119 <MAX>
}
    114b:	5b                   	pop    %rbx
    114c:	c3                   	ret
```
It calls `MAX`.  But, remember I said that the compiler is free to inline a function, even if there is no `inline` keyword?  Let's see some proofs by specifying `-O1` instead: 
```bash
gcc inline.c -o inline_1 -O1 -g
objdump -dS inline_1
```
```assembly
int max(int n)
{
	return n == 0 ? a[0] : MAX(a[n], max(n-1));
    1121:	85 ff                	test   %edi,%edi
    1123:	75 07                	jne    112c <max+0xb>
    1125:	8b 05 f5 2e 00 00    	mov    0x2ef5(%rip),%eax        # 4020 <a>
}
    112b:	c3                   	ret
{
    112c:	53                   	push   %rbx
    112d:	89 fb                	mov    %edi,%ebx
	return n == 0 ? a[0] : MAX(a[n], max(n-1));
    112f:	8d 7f ff             	lea    -0x1(%rdi),%edi
    1132:	e8 ea ff ff ff       	call   1121 <max>
    1137:	48 63 db             	movslq %ebx,%rbx
	return a > b ? a : b;
    113a:	48 8d 15 df 2e 00 00 	lea    0x2edf(%rip),%rdx        # 4020 <a>
    1141:	8b 14 9a             	mov    (%rdx,%rbx,4),%edx
    1144:	39 d0                	cmp    %edx,%eax
    1146:	0f 4c c2             	cmovl  %edx,%eax
}
    1149:	5b                   	pop    %rbx
    114a:	c3                   	ret
```
The result is exactly the same as using `inline` and compiled with `-Og`!

### 2.3 `#` and `##` operators and variable arguments

In function-like macro definitions, the `#` operator is used to create strings. The `#` operator should be followed by a formal parameter (with optional spaces or tabs in between), for example:
```c
#define STR(s) # s
STR(hello 	world)
```
After preprocessing with the `cpp` command, the output is `"hello world"`, where the actual argument is automatically enclosed in double quotes to form a string, and consecutive whitespace characters in the actual argument are replaced with a single space.

Let's see another example: 
```c
#define STR(s) #s
fputs(STR(strncmp("ab\"c\0d", "abc", '\4"')
	== 0) STR(: @\n), s);
```
<!-- "  
```
-->

After preprocessing, the output is `fputs("strncmp(\"ab\\\"c\\0d\", \"abc\", '\\4\"') == 0" ": @\n", s);`. Note that if the actual argument contains character constants or strings, the string delimiter `"` in the macro expansion should be replaced with `\"`, and the `\` and `"` characters in the character constants or strings should be replaced with `\\` and `\"`, respectively.

<!-- "  -->

In macro definitions, the `##` operator can be used to concatenate the front and back two preprocessing tokens into one preprocessing token. Unlike the # operator, the ## operator is not limited to function-like macro definitions and can also be used in variable-like macro definitions. For example, consider this code:
```c
#define CONCAT(a, b) a##b
CONCAT(con, cat)
```
After preprocessing, the output is `concat`.  Let's see another example, to define a macro that expands to two `#` symbols, you can define it as follows:
```c
#define HASH_HASH # ## #
```
The ## in the middle is an operator, and when the macro is expanded, the front and back `#` symbols are connected by this operator. Note that the two spaces in the middle are essential. If it is written as `####`, it will be divided into two tokens `##` and `##,` and according to the standard, the `##` operator is used to connect the front and back two preprocessing tokens, and cannot appear at the beginning or end of a macro definition, so an error will occur.

As we know, the `printf` function has variable arguments. Function-like macro definitions can also have variable arguments, which are also represented by `...` in the parameter list. For example, consider the following:
```c
#define showlist(...) printf(#__VA_ARGS__)
#define report(test, ...) ((test)?printf(#test):\
	printf(__VA_ARGS__))
showlist(The first, second, and third items.);
report(x>y, "x is %d but y is %d", x, y);
```
After preprocessing, it became
```c
printf("The first, second, and third items.");
((x>y)?printf("x>y"): printf("x is %d but y is %d", x, y));
```

In macro definitions, the variable argument part is represented by `__VA_ARGS__`. The actual arguments corresponding to `...` in the argument list can be considered as a single argument replacing the `__VA_ARGS__` in the macro definition.

Function-like macro definitions allow passing empty arguments, which is different from function calls. Let's understand the usage of empty arguments through the following examples:
```c
#define FOO() foo
FOO()
```
After preprocessing, the output is `foo`. `FOO` is defined without arguments, and it is not allowed to pass arguments to it when called.

We can pass the following code to a preprocessor: 
```c
#define FOO(a) foo##a
FOO(bar)
FOO()
```
The result will be 
```c
foobar
foo
```
`FOO` is defined with one argument, and it must be passed an argument when called. If no argument is passed, it means an empty argument is passed.
```c
#define FOO(a, b, c) a##b##c
FOO(1,2,3)
FOO(1,2,)
FOO(1,,3)
FOO(,,3)
```
After preprocessing, they become:
```c
123
12
13
3
```
FOO is defined with three arguments, and it must be passed three arguments when called. The position of empty arguments can be left empty, but three arguments must be provided. A call like `FOO(1,2)` is incorrect.  `__VA_ARGS__` becomes handy when you want to allow passing less than three arguments: 
```c
#define FOO(a, ...) a##__VA_ARGS__
FOO(1)
FOO(1,2,3,)
```
The result would be 
```c
1
12,3,
```

`FOO(1)` is equivalent to passing an empty argument for the variable arguments part.  `FOO(1, 2, 3,)` means having three variable arguments, where the last one is empty. 

`gcc` has an extended syntax where if the `##` operator is used before `__VA_ARGS__`, it has a special meaning in addition to its concatenation function. For example, in the kernel code `net/netfilter/nf_conntrack_proto_sctp.c`:
```c
#define DEBUGP(format, ...) printk(format, ## __VA_ARGS__)
```

The `printk` kernel function is similar to `printf`, with a formatted string and variable arguments. Since the kernel cannot call functions from `libc`, a separate print function is implemented. This function-like macro definition can be called like this: `DEBUGP("info no. %d", 1)`. It can also be called like this: `DEBUGP("info")`. The latter is equivalent to passing an empty argument for the variable argument part, but after expansion, it is not `printk("info",)`, but `printk("info")`. When `__VA_ARGS__` is an empty argument, the `##` operator "eats" the comma `,` in the front of it. 


### 2.4 Steps of Macro Expansion

The examples of macro expansion given above are all very simple. In some cases, macro expansion requires multiple replacements. For example:
```c
#define sh(x) printf("n" #x "=%d, or %d\n",n##x,alt[x])
#define sub_z  26
sh(sub_z)
```

The macro `sh(sub_z)` needs to be expanded using the macro definition `sh(x)`. The formal parameter `x` corresponds to the actual parameter `sub_z`. The expansion process is as follows:

1. `#x` is replaced with "`sub_z`".
2. `n##x` is replaced with `nsub_z`.
3. All parameters other than those with `#` and `##` operators must be fully expanded before being replaced with the actual parameter itself. Therefore, `sub_z` should be expanded to `26` before being replaced in `alt[x]` at the position of `x`.
4. The result is `printf("n" "sub_z" "=%d, or %d\n",nsub_z,alt[26])`. All parameters have been replaced. At this point, the compiler will scan again and find macro definitions that can be expanded. If `nsub_z` or `alt` is a variable macro definition, it will be further expanded.

Here is another example:

```c
#define x 3
#define f(a) f(x * (a))
#undef x
#define x 2
#define g f
#define t(a) a

t(t(g)(0) + t)(1);
```

1. `g` is expanded to `f` and replaced in `#define t(a) a`, resulting in `t(f(0) + t)(1);`.
2. According to `#define f(a) f(x * (a))`, `t(f(x * (0)) + t)(1);` is obtained.
3. `x` is replaced with `2`, resulting in `t(f(2 * (0)) + t)(1);`. Note that `x` was initially defined as `3`, but was later undefined with `#undef x` and redefined as `2`. When processing the line `t(t(g)(0) + t)(1);`, x has already been defined as `2`, so it is replaced with `2`. Also note that `f` still exists in `t(f(2 * (0)) + t)(1);`, but it cannot be expanded again according to `#define f(a) f(x * (a))`. `f(2 * (0))` is obtained by expanding `f(0)`, and encountering `f` again here will not expand it. This rule prevents infinite expansion (similar to infinite recursion) and allows recursive definitions such as `#define a a[0]` and `#define a a.member`.
4. According to `#define t(a) a`, the expression is final expanded to `f(2 * (0)) + t(1);`.  Now, we cannot expand `t(1)`, because the `t` here is a result of expending `t(f(2 * (0)) + t)`. 


- [Note A]: https://gcc.gnu.org/onlinedocs/gcc/Inline.html


## 3. Conditional Preprocessing Instructions

We have seen Header Guard in Chapter 20 Section 2: 
```c
#ifndef HEADER_FILENAME
#define HEADER_FILENAME
/* body of header */
#endif
```

Conditional preprocessing instructions may also be used in code management, i.e. to automatically generate different code for different platforms: 
```c
#if MACHINE == 68000
    int x;
#elif MACHINE == 8086
    long x;
#else    /* all others */
    #error UNKNOWN TARGET MACHINE
#endif
```

Assuming this program is written for multiple platforms, where `x` needs to be defined as `int` on the 68000 platform and as `long` on the 8086 platform, we can use conditional preprocessing directives to write it. If `MACHINE` is defined as 68000 before preprocessing this code, it will include `int x;`. If `MACHINE` is defined as 8086, it will include `long x;`. Otherwise, it will include `#error UNKNOWN TARGET MACHINE`, and the compiler will exit with an error message of `UNKNOWN TARGET MACHINE`.

To compile this code for the 8086 platform, there are several options:

1. Manually edit the code and add a line at the beginning that says `#define MACHINE 8086`. The disadvantage of this approach is that it is difficult to manage. If there are many source files in this project that need to define `MACHINE`, every time you want to compile for the 8086 platform, you will have to change all of these definitions to 8086, and every time you want to compile for the 68000 platform, you will have to change all of these definitions to 68000.

2. Include a header file at the beginning of all source files that need to be configured, and define `#define MACHINE 8086` in the header file. This way, you only need to change one header file to affect all source files that include it. Usually, this header file is generated by a configuration tool. For example, running the `make menuconfig` command in the Linux kernel source code directory will bring up a configuration menu, and the options configured there will be automatically converted into macro definitions in the `include/linux/autoconf.h` header file.

As a concrete example for setting kernel configurations, let's say we want to configure the network device support in the kernel. We can enter `Device Drivers ---> Network device support` in the configuration menu, select `Network device support`, and save and exit. This will generate a hidden file called `.config`, which looks like this:
```
...
#
# Network device support
#
CONFIG_NETDEVICES=y
# CONFIG_DUMMY is not set
# CONFIG_BONDING is not set
# CONFIG_EQUALIZER is not set
# CONFIG_TUN is not set
...
```

Then we use `make` to compile the kernel, which will generate `include/linux/autoconf.h` based on `.config`: 
```c
...
/*
 * Network device support
 */
#define CONFIG_NETDEVICES 1
#undef CONFIG_DUMMY
#undef CONFIG_BONDING
#undef CONFIG_EQUALIZER
#undef CONFIG_TUN
...
```


The above code uses `#undef` to ensure that some macros are undefined. If `CONFIG_DUMMY` was not defined before, using `#undef CONFIG_DUMMY` to cancel its definition has no effect and is not considered an error.

`include/linux/autoconf.h` is included in another header file, `include/linux/config.h`, which is usually included in kernel code. For example, in `net/core/sock.c`:
```c
...
#include <linux/config.h>
...
int sock_setsockopt(struct socket *sock, int level, int optname,
                    char __user *optval, int optlen)
{
...
#ifdef CONFIG_NETDEVICES
                case SO_BINDTODEVICE:
                {
                     ...
                }
#endif
...
```
Also, in `drivers/isdn/i4l/isdn_common.c`: 
```c
...
#include <linux/config.h>
...
static int
isdn_ioctl(struct inode *inode, struct file *file, uint cmd, ulong arg)
{
...
#ifdef CONFIG_NETDEVICES
                        case IIOCNETGPN:
                                /* Get peer phone number of a connected
                                 * isdn network interface */
                                if (arg) {
                                        if (copy_from_user(&phone, argp, sizeof(phone)))
                                                return -EFAULT;
                                        return isdn_net_getpeer(&phone, argp);
                                } else
                                        return -EINVAL;
#endif
...
#ifdef CONFIG_NETDEVICES
                        case IIOCNETAIF:
...
#endif                          /* CONFIG_NETDEVICES */
...
```

In this way, the configuration made in the configuration menu ultimately determines which code is compiled into the kernel through conditional preprocessing.
`#ifdef` or `#if` can be nested. However, preprocessing directives are usually written without indentation.  In order to distinguish the nesting level, you can use comments like the last line of code in the above example to indicate which `#if` or `#ifdef` it ends.

3. There is another way to define a macro besides using `#define` in the code. As we saw in the "Binary Search" section of Chapter 6, we can define a macro `NDEBUG` using the `-D` option of `gcc`.  For the example above, we need to define a value for MACHINE, which can be written as a command like this: gcc -c -DMACHINE=8086 main.c. This method requires adding appropriate options to each compilation command, which seems to be quite cumbersome compared to the second method. The second method writes the macro definition only once in the header file and takes effect in many source files. Can the third method achieve "write once, take effect everywhere"? We will have a solution after learning Makefile.

Finally, let's talk about the expression after `#if` through the following example:

```c
#define VERSION  2
#if defined x || y || VERSION < 3
```
1. First, process the defined operator. The defined operator is generally used as part of an expression. If used alone, `#if defined x` is equivalent to `#ifdef x`, and `#if !defined x` is equivalent to `#ifndef x`. In this example, if the macro `x` is defined, the preprocessor replace defined `x` with `1`, otherwise replace it with `0`, so it becomes `#if 0 || y || VERSION < 3`.

2. Then it expands the defined macros, becoming `#if 0 || y || 2 < 3`.

3. It then replaces undefined macros with `0`, becoming `#if 0 || 0 || 2 < 3`. Note that even if a variable named `y` was defined earlier, it is still replaced with `0` at this step, because the expression of `#if` must be evaluated at compile time, and the names it contains can only be macro definitions.

4. Evaluate the resulting expression `0 || 0 || 2 < 3` like a C expression. The evaluation result is `#if 1`, so the condition is met 


## 4. Other Preprocessing Features

The `#pragma` preprocessing directive allows the compiler to implement some non-standard features. The C standard does not specify what should be written after `#pragma` or what it should do, it is up to the compiler to decide. Some compilers use `#pragma` to define special function register names, while others use `#pragma` to locate link addresses. This book does not go into depth on this topic. If the compiler encounters an unrecognized `#pragma` directive in the code, it ignores it. For example, `gcc`'s `#pragma` directives are in the form of `#pragma GCC...`, which are ignored when compiled with other compilers.

The C standard defines several special macros that can automatically expand to different values when used in different places. The most commonly used ones are `_FILE_` and `_LINE_`.  `_FILE_` expands to the file name of the current source file, which is a string, and `_LINE_` expands to the line number of the current code line, which is an integer. These two macros will automatically take different values when used in different positions in the source code. Obviously, they cannot be defined using a `#define` statement, they are special macros built into the compiler. Printing these two macros when printing debugging information can be very useful for developers. For example, in Section 6 "Binary Search" we saw that the assert function prints error messages with the values of `_FILE_` and `_LINE_`. Now we will implement this assert function ourselves to understand its principle. This implementation comes from [Standard C Library]:
```c
/* assert.h standard header */
#undef assert	/* remove existing definition */

#ifdef NDEBUG
	#define assert(test)	((void)0)
#else		/* NDEBUG not defined */
	void _Assert(char *);
	/* macros */
	#define _STR(x) _VAL(x)
	#define _VAL(x) #x
	#define assert(test)	((test) ? (void)0 \
		: _Assert(__FILE__ ":" _STR(__LINE__) " " #test))
#endif
```

Through this example, we can comprehensively review the knowledge taught in this chapter. The C standard specifies that assert should be implemented as a macro definition rather than a real function, and the value of the expression `assert(test)` should be of type `void`. First, we use `#undef assert` to ensure that the previous definition of assert is canceled, and then we divide it into two cases: if `NDEBUG` is defined, `assert(test)` is directly defined as a `void` type value, and nothing is done; if `NDEBUG` is not defined, it is necessary to judge whether the test condition test is true. If the condition is true, nothing is done. If it is not true, the `_Assert` function is called. Assuming that `assert(is_sorted())` is called on line 33 of the `main.c` file, `_FILE_` is the string "`main.c`", `_LINE_` is the integer 33, and `#test` is the string "`is_sorted()`". Note the expansion process of `_STR(__LINE__)`: first it is expanded to `_VAL(33)`, and then further expanded to the string `"33"`. In this way, the final form of the `_Assert` call is `_Assert("main.c" ":" "33" " " "is_sorted()")`, and the string passed to the `_Assert` function is "`main.c:33 is_sorted()`". The_Assert function is defined by ourselves in another source file:
```c
/* xassert.c _Assert function */
#include <stdio.h>
#include <stdlib.h>

void _Assert(char *mesg)
{		/* print assertion message and abort */
	fputs(mesg, stderr);
	fputs(" -- assertion failed\n", stderr);
	abort();
}
```

Note that the identifiers used internally in the `assert.h` header file defined by ourselves all start with an underscore, such as `_STR`, `_VAL`, and `_Assert`, because we are simulating the implementation of the C standard library. In Chapter 2 Section 3 "Variables", we mentioned that identifiers starting with an underscore are usually used by the compiler and the C language library. You can see a large number of identifiers starting with an underscore in the header files under `/usr/include`. Another question is, why don't we directly call `fputs` and `abort` in the macro definition of assert? Because calling these two functions requires including `stdio.h` and `stdlib.h`, and the header files of the C standard library should be independent of each other. A program should be able to use assert by simply including `assert.h`, without relying on other header files. The `fputs` in `_Assert` prints error messages to standard error output, and abort terminates the current process abnormally. We will discuss these functions in detail later.

Now let's test our assert implementation by putting `assert.h`, `xassert.c`, and the test code `main.c` in the same directory: 
```c
/* main.c */
#include "assert.h"

int main(void)
{
	assert(2>3);
	return 0;
}
```

Note that `#include "assert.h"` should use double quotes instead of angle brackets, because we want to use our own implementation, instead of the one from the standard library.  Then compile and execute: 
```bash
$ gcc main.c xassert.c
$ ./a.out
main.c:6 2>3 -- assertion failed
Aborted
```


C99 introduces a new identifier `__func__`.  According to [C11], it can be used as if it is defined as 
```c
          static const char __func__[] = "function-name";
```
at the beginning of a function definition.  Since this is a name of a constant variable, it is not a part of preprocessing, but it has the similar functionalities as `__FILE__` and `__LINE__` .  Thus, we introduce it in the same section. 

```c
#include <stdio.h>

void myfunc(void)
{
	printf("%s\n", __func__);
}

int main(void)
{
	myfunc();
	printf("%s\n", __func__);
	return 0;
}
```

```bash
$ gcc main.c
$ ./a.out 
myfunc
main
```
# Chapter 20 Linking and Linkage

TODO: Introduce the whole compilation process using an example and put them in Section 0. 

It might also worth while to introduce the sections of different files

## 1. Linking a multiple-object-file project 

To demonstrate linking, we split Example 12.1 _using stacks for reversing printing order_ into two files.  We put the implementation of stack in `stack.c` and use the stack in `main.c`. 

```c
/* stack.c Implementation of stack
*/
char stack[512];
int top = -1;

void push(char c)
{
	stack[++top] = c;
}

char pop(void)
{
	return stack[top--];
}

int is_empty(void)
{
	return top == -1;
}
```

```c
/* main.c */
#include <stdio.h>

int a, b = 1;

int main(void)
{
	push('a');
	push('b');
	push('c');
	
	while(!is_empty())
		putchar(pop());
	putchar('\n');

	return 0;
}
```

This program is slightly different from the original example in section 12.1. In the original example, `top` always points to the next element after the top element of the stack, while in this program, `top` always points to the top element of the stack. Therefore, `top` needs to be initialized as -1 to represent an empty stack. Both stack implementations are common.

The two variables `a` and `b` are not used and are only added to explain the linking process. The compilation steps are the same as before and can be compiled in one step:

```bash
$ gcc main.c stack.c -o main
```

Or in multiple steps:

```bash
$ gcc -c main.c
$ gcc -c stack.c
$ gcc main.o stack.o -o main
```

We may follow the method in Chapter 19 Section 2 "Main Function and Startup Routine", and use the `nm` command to view the symbol table of the object file:
```bash
$ nm main.o
0000000000000000 B a
0000000000000000 D b
                 U is_empty
0000000000000000 T main
                 U pop
                 U push
                 U putchar
```
The command `nm` shows 
- The symbol value (if the symbol stands for a variable, it means its address)
- The symbol type
    - `B` for `.bss`
    - `D` for `.data`
    - `T` for text, and
    - `U` for undefined
We founding undefined symbols `push`, `pop`, `is_empty`, and `putchar` in `main.o` (their addresses are 0 and have `U` as their symbol types!). These symbols are implemented in `stack.o`.  When generating the executable file `main`, symbol resolution can be done, and `putchar` is a library function of `libc`, which is still undefined in the executable file `main` and needs to be dynamically linked at runtime.

We now use the `nm main` command to see the symbols in `main`. 
We can see that the `.bss` section of `main` merges the `.bss` sections of `main.o` and `stack.o`, which includes the variables `a` and `stack`. The `.data` section of `main` also merges the `.data` sections of `main.o` and `stack.o`, which includes the variables `b` and `top`. The `.text` section of `main` merges the `.text` sections of `main.o` and `stack.o`, which includes the definitions of each function. The figure below shows this process.

```bash
$ nm main
0000000000004024 B a
0000000000004018 D b
0000000000004020 B __bss_start
                 w __cxa_finalize@GLIBC_2.2.5
0000000000004008 D __data_start
0000000000004008 W data_start
0000000000004010 D __dso_handle
0000000000003de0 d _DYNAMIC
0000000000004020 D _edata
0000000000004240 B _end
0000000000001204 T _fini
0000000000003fe8 d _GLOBAL_OFFSET_TABLE_
                 w __gmon_start__
0000000000002004 r __GNU_EH_FRAME_HDR
0000000000001000 T _init
0000000000002000 R _IO_stdin_used
00000000000011ef T is_empty
                 w _ITM_deregisterTMCloneTable
                 w _ITM_registerTMCloneTable
                 U __libc_start_main@GLIBC_2.34
0000000000001139 T main
00000000000011cd T pop
000000000000119c T push
                 U putchar@GLIBC_2.2.5
0000000000004040 B stack
0000000000001040 T _start
0000000000004020 D __TMC_END__
000000000000401c D top

```

![Multiple Object File Linking](images/link.multiobj.png)

Why are the variables or functions from `main.o` in each section of the executable file `main` at the front, while those from `stack.o` are at the back? We can try to reverse the order of the two object files in the `gcc` command:
```bash
$ gcc stack.o main.o -o main
$ nm main | sort
0000000000001000 T _init
0000000000001040 T _start
0000000000001139 T push
000000000000116a T pop
000000000000118c T is_empty
00000000000011a1 T main
0000000000001204 T _fini
0000000000002000 R _IO_stdin_used
0000000000002004 r __GNU_EH_FRAME_HDR
0000000000003de0 d _DYNAMIC
0000000000003fe8 d _GLOBAL_OFFSET_TABLE_
0000000000004008 D __data_start
0000000000004008 W data_start
0000000000004010 D __dso_handle
0000000000004018 D top
000000000000401c D b
0000000000004020 B __bss_start
0000000000004020 D _edata
0000000000004020 D __TMC_END__
0000000000004040 B stack
0000000000004240 B a
0000000000004248 B _end
                 U __libc_start_main@GLIBC_2.34
                 U putchar@GLIBC_2.2.5
                 w __cxa_finalize@GLIBC_2.2.5
                 w __gmon_start__
                 w _ITM_deregisterTMCloneTable
                 w _ITM_registerTMCloneTable
```

As expected, the variables or functions from `main.o` in each section of the executable file `main` are now at the back. In fact, the linking process is controlled by a linker script, which determines what address to allocate to each section, how to align them, which section comes first, which section comes last, which sections are merged into the same segment, and so on. In addition, the linker script inserts some symbols into the final generated file, such as `__bss_start`, `_edata`, `_end`, and so on. If the `ld` command is used for linking without specifying the linker script with the `-T` option, the default linker script of `ld` is used. The default linker script can be viewed with the `ld --verbose` command (only some fragments are listed below):


```c
$ ld --verbose
GNU ld (GNU Binutils) 2.40.0
...
using internal linker script:
==================================================
/* Script for -z combreloc -z separate-code */
/* Copyright (C) 2014-2023 Free Software Foundation, Inc.
   Copying and distribution of this script, with or without modification,
   are permitted in any medium without royalty provided the copyright
   notice and this notice are preserved.  */
OUTPUT_FORMAT("elf64-x86-64", "elf64-x86-64",
	      "elf64-x86-64")
OUTPUT_ARCH(i386:x86-64)
ENTRY(_start)
...
SECTIONS
{
  PROVIDE (__executable_start = SEGMENT_START("text-segment", 0x400000)); . = SEGMENT_START("text-segment", 0x400000) + SIZEOF_HEADERS;
  .interp         : { *(.interp) }
  .note.gnu.build-id  : { *(.note.gnu.build-id) }
  .hash           : { *(.hash) }
  .gnu.hash       : { *(.gnu.hash) }
  .dynsym         : { *(.dynsym) }
  .dynstr         : { *(.dynstr) }
  .gnu.version    : { *(.gnu.version) }
  .gnu.version_d  : { *(.gnu.version_d) }
  .gnu.version_r  : { *(.gnu.version_r) }
  .rela.dyn       :
    {
...
    }
  .rela.plt       :
    {
...
    }
  .init           :
...
  .plt            : { *(.plt) *(.iplt) }
...
  .text           :
...
  .fini           :
...
  .rodata         : { *(.rodata .rodata.* .gnu.linkonce.r.*) }
  .rodata1        : { *(.rodata1) }
  .eh_frame_hdr   : { *(.eh_frame_hdr) *(.eh_frame_entry .eh_frame_entry.*) }
  .eh_frame       : ONLY_IF_RO { KEEP (*(.eh_frame)) *(.eh_frame.*) }
...
  /* Adjust the address for the data segment.  We want to adjust up to
     the same address within the page on the next page up.  */
  . = DATA_SEGMENT_ALIGN (CONSTANT (MAXPAGESIZE), CONSTANT (COMMONPAGESIZE));
  .ctors          :
...
  .dtors          :
...
  .jcr            : { KEEP (*(.jcr)) }
...
  .got            : { *(.got) *(.igot) }
  . = DATA_SEGMENT_RELRO_END (SIZEOF (.got.plt) >= 24 ? 24 : 0, .);
  .got.plt        : { *(.got.plt) *(.igot.plt) }
...
  _edata = .; PROVIDE (edata = .);
...
  __bss_start = .;
  .bss            :
...
  _end = .; PROVIDE (end = .);
  . = DATA_SEGMENT_END (.);
  /* Stabs debugging sections.  */
...
  /* DWARF debug sections.
     Symbols in the DWARF debugging sections are relative to the beginning
     of the section so we begin them at 0.  */
...
}


==================================================
```


`ENTRY(_start)` explains that `_start` is the entry point of the entire program. Therefore, `_start` being the entry point is not a fixed rule, and other functions can be used as entry points.

`PROVIDE (__executable_start = SEGMENT_START("text-segment", 0x400000)); . = SEGMENT_START("text-segment", 0x400000) + SIZEOF_HEADERS;` defines 
the starting address of the Text segment.  This segment contains the sections below, like `.plt`, `.text`, `.rodata`.  The format of defining each section is `section_name: { contents}`, for example, `.plt : { *(.plt) }`.  This statement means we want to put the `.plt` of the object file's `.plt` sections into the `.plt` section of the final generated (executable) file. 

The statement `. = DATA_SEGMENT_ALIGN (CONSTANT (MAXPAGESIZE), CONSTANT (COMMONPAGESIZE));` sets starting address of the Data segment, which requires a series of alignment operations. This segment contains the sections listed later, such as `.got`, `.data`, `.bss`, and so on.

There are other segments after the Data segment, mainly for debugging information. This book will not discuss linker scripts in depth. 

TODO: meaning of each section

## 2. Declaration, Definition and Initialization

### Do not use implicit declaration

In the previous section, we compiled and linked two program files together. `main.c` used the functions `push`, `pop`, and `is_empty` provided by `stack.c`. However, there was a "small" issue [Note A]. When we compiled main.c, we saw the following warnings:
```c
$ gcc -c main.c 
main.c: In function ‘main’:
main.c:8:9: warning: implicit declaration of function ‘push’ [-Wimplicit-function-declaration]
    8 |         push('a');
      |         ^~~~
main.c:12:16: warning: implicit declaration of function ‘is_empty’ [-Wimplicit-function-declaration]
   12 |         while(!is_empty())
      |                ^~~~~~~~
main.c:13:25: warning: implicit declaration of function ‘pop’; did you mean ‘popen’? [-Wimplicit-function-declaration]
   13 |                 putchar(pop());
      |                         ^~~
      |                         popen

```


We discussed this issue in [Chapter 3 Section 2 "Custom Functions"](ch03s02.html#func.ourfirstfunc). The compiler couldn't find the function prototypes when processing the function call code, so it had to make implicit declarations. It declared these three functions as:

```c
int push(char);
int pop(void);
int is_empty(void);
```

Now, you should understand this rule better than when you were studying the above section. 
Why does the compiler need to have function prototypes when processing function call code? Because it needs to know the types and number of parameters, as well as the return type, to know what kind of instructions to generate.

Why can't we rely on implicit declarations? Because implicit declarations are inferred from the function call code, and the actual parameter types in the function definition may not match the actual parameter types passed in the function call code. If the function definition has variable parameters (like `printf`), then you can't tell from the function call code that this function has variable parameters.

Also, you can't tell from the function call code what the return type should be, so implicit declarations can only specify that all return values are of type `int`. Since implicit declarations are unreliable, why doesn't the compiler find the function definition itself, instead of requiring us to write function prototypes before calling? Because the compiler often doesn't know where to find the function definition.

For example, in the above case, I asked the compiler to compile `main.c`, but the definitions of these functions are in `stack.c`. How would the compiler know?  So the compiler can only guess the function prototype through implicit declaration. This guess is often wrong, but it is usable in simpler cases, such as the example in the previous section, which can be compiled to get the correct result.

Paul: Now let's talk about something that has been mandated in [C99].  _Every function must be explicitly declared_.  _Sadly, most compilers haven't mandate this, after 23 years_.  We mentioned `printf` above, now let's see a more concrete example: 

```c
#include <stdio.h>
#include <stdarg.h>

int main (void) {
	int a = sum(1, 2, 0);
	int b = sum(1, 2, 3, 0);
	return 0;
}

int sum(int first, ...) {
	va_list ap;
	int next;
	va_start(ap, first);
	while((next = va_arg(ap, int)) != 0) {
		first += next;
	}
	va_end(ap);
	return first;
}
```

The `sum` function calculates the sum of all of its arguments, and it expects the list of arguments to be terminated by 0.  When compiled using `gcc`, you will get the following error message: 
```
print.c: In function ‘main’:
print.c:5:17: warning: implicit declaration of function ‘sum’ [-Wimplicit-function-declaration]
    5 |         int a = sum(1, 2, 0);
      |                 ^~~
print.c: At top level:
print.c:10:5: error: conflicting types for ‘sum’; have ‘int(int, ...)’
   10 | int sum(int first, ...) {
      |     ^~~
print.c:10:1: note: a parameter list with an ellipsis cannot match an empty parameter name list declaration
   10 | int sum(int first, ...) {
      | ^~~
print.c:5:17: note: previous implicit declaration of ‘sum’ with type ‘int()’
    5 |         int a = sum(1, 2, 0);
      |                 ^~~
```

When these error, warning and notes are put together, it is very easy to figure out where went wrong.  However, (1) many programmers developed a habit (or even hobby) to ignore warnings, (2) many IDE hides notes, and (3) the warning and error will usually be separated parts by a lot of other warnings if the programmer keeps ignore warnings.  This is still not so bad, at last the compiler complains.  Now, let's look at the following example: 

```c
#include <stdio.h>
#include <stdarg.h>

// int sum(int, int, int);

int main (void) {
	int a = sum(1, 2);
	int b = sum(1, 2, 3, 0);
	printf("%d, %d\n", a, b);
	return 0;
}

int sum(int a, int b, int c) {
	return a + b + c;
}
```

_This program passes compilation!_  The result (on one run) is: 
```
-1076645093, 6
```


If we uncomment the declaration, `gcc` will happily give us an error, allowing us to correct it immediately: 
```c
sum_2.c: In function ‘main’:
sum_2.c:7:17: error: too few arguments to function ‘sum’
    7 |         int a = sum(1, 2);
      |                 ^~~
sum_2.c:4:5: note: declared here
    4 | int sum(int, int, int);
      |     ^~~
sum_2.c:8:17: error: too many arguments to function ‘sum’
    8 |         int b = sum(1, 2, 3, 0);
      |                 ^~~
sum_2.c:4:5: note: declared here
    4 | int sum(int, int, int);
      |     ^~~
```

Having spent so many efforts, I hope readers become clear about the rationale of the loud and clear message -- _**NEVER EVER declare a function implicitly**._

Next, we study a special case of "incomplete definition": 
```c
#include <stdio.h>

void output ();

int main (void) {
	output(1);
	return 0;
}

void output () {
	printf("This is a line.\n");
}
```

In some programming languages, declaring and defining a function with a empty bracket means the function does not take any arguments.  However, this is not the case in C.  Here, `void output ();` means we declare the return value of `output` to be `void` typed, and we did not declare its parameter list. 

GCC compiles this code without any warning, even if we turned on `-Wextra`.  On the other hand, `clang` will complain: 
```bash
$ gcc output.c -Wall -Wextra
$ clang output.c 
output.c:6:8: warning: passing arguments to 'output' without a prototype is deprecated in all versions of C and is not supported in C2x [-Wdeprecated-non-prototype]
        output(1);
              ^
1 warning generated.
```

The proper way is to put `void` in the brackets: 
```c
void output (void);
```
This results in an error: 
```
output.c: In function ‘main’:
output.c:6:9: error: too many arguments to function ‘output’
    6 |         output(1);
      |         ^~~~~~
output.c:3:6: note: declared here
    3 | void output (void);
      |      ^~~~~~
```


### Using `extern` and `static` storage-class specifiers

OK, let's go back to our code about stacks.  Now, let's declare the prototypes of these functions in main.c:

```c
/* main.c */
#include <stdio.h>

extern void push(char);
extern char pop(void);
extern int is_empty(void);

int main(void)
{
	push('a');
	push('b');
	push('c');
	
	while(!is_empty())
		putchar(pop());
	putchar('\n');

	return 0;
}
```

This way, the compiler won't give a warning. Here, the `extern` keyword indicates that this identifier has _External Linkage_. We shall discuss the meaning of linkage in the next sub-section. The identifier push having External Linkage means: if `main.c` and `stack.c` are linked together, if push is declared in both `main.c` and `stack.c` (the declaration in `stack.c` is also a definition), then these declarations refer to the same function. After linking, it is the same GLOBAL symbol, representing the same address. The `extern` in the function declaration can also be omitted. A function declaration without `extern` also indicates that this function has External Linkage.


If a function declaration is modified with the `static` keyword, it means that the identifier has Internal Linkage. For example, consider the following two program files:
```c
/* foo.c */
static void foo(void) {}
```

```c
/* main.c */
void foo(void);
int main(void) { foo(); return 0; }
```

Compiling and linking them together will result in an error:
```bash
$ gcc foo.c main.c
/usr/bin/ld: /tmp/ccmv9gYB.o: in function `main':
main.c:(.text+0x5): undefined reference to `foo'
collect2: error: ld returned 1 exit status
```

Although the function foo is defined in `foo.c`, this function only has Internal Linkage. 
If `foo()` is declared multiple times in `foo.c`, they still represent the same function.  However, the declaration in `main.c` does not represent it. If `foo.c` is compiled into an object file, the function name foo is a `LOCAL` symbol [Note A] in it and does not participate in the linking process. So during linking, main.c anticipates a `foo` function with External Linkage, but the linker can't find its definition, can't determine its address, and can't resolve the symbol, so it has to report an error. _Any variable or function that is declared multiple times must have exactly one declaration that is a definition. If there are multiple definitions, or if there is no definition, the linker cannot complete the linking._

The above discusses the situation where the `static` and `extern` class specifiers are used to modify function declarations.  Now let's look at the situation where they are used to modify variable declarations.  Still using the `stack.c` and `main.c` examples, if I want to directly access the variable `top` defined in `stack.c` in `main.c`, I can declare it with `extern`:

```c
/* main.c */
#include <stdio.h>

void push(char);
char pop(void);
int is_empty(void);
extern int top;

int main(void)
{
	push('a');
	push('b');
	push('c');
	printf("%d\n", top);
	
	while(!is_empty())
		putchar(pop());
	putchar('\n');
	printf("%d\n", top);

	return 0;
}
```

The variable `top` has External Linkage, and its storage space is allocated in `stack.c`, so the variable declaration `extern int top;` in `main.c` is not a variable definition, because it does not allocate storage space. The above function and variable declarations can also be written inside the `main` function body, so that the declared identifiers have block scope:

```c
int main(void)
{
	void push(char);
	char pop(void);
	int is_empty(void);
	extern int top;

	push('a');
	push('b');
	push('c');
	printf("%d\n", top);
	
	while(!is_empty())
		putchar(pop());
	putchar('\n');
	printf("%d\n", top);

	return 0;
}
```

Note that there is a difference between variable declarations and function declarations. The `extern` in function declarations can be written or omitted without chaining their meanings, but if `extern` is not written in variable declarations, the meaning completely changes. If `extern` is not written in the above example, it means defining a local variable top in the `main` function. Also note that the definition in `stack.c` is `int top = -1;`, and the declaration in `main.c` cannot add an initializer. If the above example is written as `extern int top = -1;`, the compiler will report an error.

In `main.c`, you can access the variable `top` in `stack.c` through variable declaration, but from the perspective of implementing the `stack.c` module, the variable top is not intended to be accessed by the outside world. The variables `top` and `stack` are part of the internal state of this module. The outside world should only be allowed to change the internal state of the module through the `push` and `pop` functions, in order to ensure the LIFO characteristic of the stack. If the outside world can randomly access stack or arbitrarily modify top, then the state of the stack will be messed up. So how can we prevent the outside world from accessing top and stack? The answer is to use the static keyword to declare them with Internal Linkage:
```c
/* stack.c */
static char stack[512];
static int top = -1;

void push(char c)
{
	stack[++top] = c;
}

char pop(void)
{
	return stack[top--];
}

int is_empty(void)
{
	return top == -1;
}
```

This way, we cannot access `top` and `stack` in `main.c`, even if we declare them as `extern`, which protects the internal states of `stack.c`.  This is what we call _encapsulation_ in modular program design. 

The purpose of declaring a function with the `static` keyword to have Internal Linkage is similar. In a module, some functions are _exported_ for external use. These functions are declared as having External Linkage. Some functions are only used internally within the module and are not intended to be accessed externally. These are declared as having Internal Linkage.


- [Note A]: We shall talk about the symbol table in the coming chapters. 


### Variable initialization

A concept closely related with declaration and definition is variable initialization.  Usually, there are two ways of initialize a variable, either initialize it when defining it, or initialize it later. 

Since using uninitialized variables can trigger undefined behaviour and the "overhead" of unnecessary initialization can usually be optimized out, there are not many reason for not initializing a variable when defining it.  The feature is still in C, mainly due to historical reason:  Having uninitialized variables was common on [C89] era, because every declaration must had proceed all execution statements in a block.  If a programmer was sure that a variable will always be assigned a value before use, then it would be justifiable for him/her to defining it without initializing it.  For example, the following code block is not a valid C89 code: 
```c
void foo() {
    printf("This is an example function.\n");
    for(int i = 0; i < 10; i++) {
        printf("%d\n", i);
    }
}
```
The C89 equivalent is: 
```c
void foo() {
    int i; 

    printf("This is an example function.\n");
    // i is only used once here
    for(i = 0; i < 10; i++) {
        printf("%d\n", i);
    }
}
```

Declaring and initializing a local variable (block scoped variables, e.g. `int a = (exp);`) is equivalent to breaking then into two lines: 
```c
int a;
a = (exp);
```
where `exp` is any valid expression that can be implicitly converted to `int`. 

However, for global (file scoped) variables, the initializer must be a (compile-time) constant expression.  Since we are not allowed to have any execution statement outside functions, the initialization of a global variable is indeed not implemented as an assignment.  The value was computed in compile time, and put into the space allocated for the variable in `.data`. 

### Header file

Continuing from our previous discussion about `stack.c` and `main.c`, the `stack.c` module encapsulates the `top` and `stack` variables and exports the `push`, `pops`, and `is_empty` function interfaces. This design is fairly robust at this moment. However, it can be cumbersome if every program file that uses this module has to write three function declarations. For instance, if there is another file `foo.c` that also uses this module, both `main.c` and `foo.c` would need to include the three function declarations. 

To avoid this repetition, we can create a header file `stack.h`:
```c
/* stack.h */
#ifndef STACK_H
#define STACK_H
extern void push(char);
extern char pop(void);
extern int is_empty(void);
#endif
```

Now, in `main.c`, we only need to include this header file, eliminating the need to write three function declarations:
```c
/* main.c */
#include <stdio.h>
#include "stack.h"

int main(void)
{
	push('a');
	push('b');
	push('c');
	
	while(!is_empty())
		putchar(pop());
	putchar('\n');

	return 0;
}
```

Why we use angled brackets (french quotation marks) for `#include <stdio.h>`, but double quotation marks for `#include "stack.h"`?  The quotation marks tell the compiler where to find the header files. 
For header files included with angle brackets, `gcc` first searches the directories specified by the `-I` option, then it searches the system's header file directories (usually `/usr/include`, and on my system, it also includes `/usr/lib/gcc/x86_64-pc-linux-gnu/13.1.1/include`) [Note A].  On the other hand, for header files included with double quotation marks, `gcc` first searches the directory where the `.c` file that includes the header file is located. Then it searches the directories specified by the `-I` option, and finally, it searches the system's header file directories.
This difference in search order between angle brackets and quotes allows you to override system header files with your own versions, if necessary, but this is not a typical technique we use.


If all three code files are in the current directory:
```bash
$ tree
.
|-- main.c
|-- stack.c
`-- stack.h

0 directories, 3 files
```
You can compile with `gcc -c main.c`. `gcc` will automatically find `stack.h` in the directory where `main.c` is located.

On the other hand, suppose you moved `stack.h` to a subdirectory:
```c
$ tree
.
|-- main.c
`-- stack
    |-- stack.c
    `-- stack.h

1 directory, 3 files
```
Then you need to compile with `gcc -c main.c -Istack`. The `-I` option tells `gcc` to look for the header file in the stack subdirectory.

In the #include preprocessor directive, you can use relative paths. For example, if you change the code to `#include "stack/stack.h"`, you don't need to add the `-Istack` option during compilation. This is because `gcc` will automatically look in the directory where `main.c` is located, and the relative path of the header file to the directory where `main.c` is located is indeed `stack/stack.h`.

In `stack.h`, we see two new preprocessor directives: `#ifndef STACK_H` and `#define STACK_H`. These are part of a common idiom in C programming known as an "include guard". Include guards prevent a header file from being included multiple times, which can cause problems. The `#ifndef` directive checks if `STACK_H` has not been defined. If it hasn't, the code until the corresponding `#endif` is included. The `#define` directive then defines `STACK_H`, so if the file is included again, the `#ifndef` check will fail and the code will be skipped. 

Suppose we include `stack.h` twice in `main.c`: 
```c
...
#include "stack.h"
#include "stack.h"

int main(void)
{
...
```

The first time we include it, `STACK_H` was not defined, so the content of the header file body will appear in the final preprocessing results.  However, when processing the second ` #include "stack.h"` directive, the compiler realized that we have `STACK_H` defined, and the content of the included header file is effectively empty.  Hence, we have the final preprocessing result below: 
```c
...
#define STACK_H
extern void push(char);
extern char pop(void);
extern int is_empty(void);

int main(void)
{
...
```

As a convention, we shall always use upper cases for macro definitions to avoid having the same name as any local variable (which can create difficult-to-debug error).  Also, nearly all header files should include header guards to prevent repeated inclusion.  Why bother?  Who would include a header file twice? While blatant mistakes like these are rare, sometimes the error is not so obvious. For example, suppose one source file requires both `stack.h` and `foo.h`:
```c
#include "stack.h"
#include "foo.h"
```
However, `foo.h` might include `bar.h`, and `bar.h` might include `stack.h`. In larger projects, it's common for header files to include other header files, often nested several layers deep, making it hard to spot multiple inclusions.
As a concrete example, in my system's header file directory `/usr/include`, `errno.h` file includes `bits/errno.h`, which in turn includes `linux/errno.h`, which includes `asm/errno.h`, which includes  `asm-generic/errno.h`, which includes `asm-generic/errno-base.h`. 

Moreover, even if a header file is included multiple times, what harm does it do? For functions with External Linkage, declaring them multiple times is not an issue as they all refer to the same function. However, multiple inclusions of header files can cause problems:

1. **Slower preprocessing** It slows down the preprocessing stage as it has to process many unnecessary header files.
2. **cyclic inclusion** If `foo.h` includes `bar.h` and `bar.h` includes `foo.h`, the preprocessor falls into an infinite loop (although compilers usually set a limit on the number of inclusion levels).
3. Some code in header files cannot appear multiple times. Although variables and functions can be declared multiple times (as long as they are not defined multiple times), some code, such as `typedef` type definitions, structure tag definitions and `inline` and `static inline` function definitions, can only appear once in a program file. 

There's another question that might come up: since we need to #include header files, why not just `#include "stack.c"` directly in `main.c`? This would merge `stack.c` and `main.c` into the same program file, which is similar to the initial example in [Example 12.1 "Using Stack to Implement Reverse Printing"](ch12s02.html#stackqueue.stackreverse). Of course, this would also compile successfully, but it's not feasible in a larger project. What if there's another file `foo.c` that also needs to use the `stack.c` module? If we also `#include "stack.c" in foo.c`, it would be equivalent to having the functions `push`, `pop`, and `is_empty` defined in both `main.c` and `foo.c`. In this case, `main.o` and `foo.o` cannot be linked together. If we use the method of including header files, these three functions are only defined once in `stack.c`, and in the end, `main.o`, `stack.o`, and `foo.c` can be linked together. This is illustrated in the following figure:

![Why include header files instead of .c files](images/link.includeh.png)

Due to the same reason, variable and function declarations in header files must not be definitions, unless they are `static` or `inline`. If a header file contains variable or function definitions (that have external linkage) and this header file is included by multiple `.c` files, then these `.c` files cannot be linked together. 


- [Note A]: Interested readers find the include search paths using the method provided in <https://stackoverflow.com/questions/17939930/finding-out-what-the-gcc-include-path-is>.

### Detailed rules about using storage-class specifiers

The previous two sections only introduced the most basic rules about definitions and declarations. These basic rules are sufficient for writing code, but in fact, C language has many complex rules about definitions and declarations. These rules are necessary when analyzing error causes or maintaining large-scale projects. The tables in this section are inspired by [Standard C](bi01.html#bibli.standardc).

The following program demonstrates some ob secure but occasionally useful feature we shall introduce in this sub-section: 
```c
#include <stdio.h>

int a = 0;

int main (void) {
	void foo (void);        // (1)
	foo();
	printf("%d\n", a);
	return 0;
}

void foo (void) {
	extern int a;           // (2)
    // int a;  // (3)   // error: redeclaration of ‘a’ with no linkage
                        // info:  error: redeclaration of ‘a’ with no linkage, 
                        //        previously defined in line 3
	a += 1;
}
```
**Example 20.2**

Let's first review the rules of linkage about function declarations: 

**Table: the effects of storage class specifiers on function linkages**

| Storage class | File scope declaration | Block scope declaration |
| :-            | :-                     | :-                      |
| none          | previous linkage       | previous linkage        |
| `extern`      | previous linkage       | previous linkage        |
| `static`      | internal linkage       | Not allowed             |

Why there is a column for "block scope declaration", you might ask.  Line (1) in Example 20.2 demonstrates the usage -- declaring a function that will only be used in another function.  Here, we may add an `extern` keyword on line (1) without changing the behaviour. 

Previously, we said that the `extern` keyword indicates that the identifier has external linkage, which is not entirely accurate. More accurately, it should be described as Previous Linkage. The definition of Previous Linkage is: the linkage of the identifier declared this time depends on the previous declaration, which has the same identifier name and must be a file scope declaration. If no previous declaration can be found in the program file (this declaration is the first declaration), then the identifier has external linkage. For example, in a program file, the same function is declared twice at file scope:

```c
static int f(void); /* internal linkage */
extern int f(void); /* previous linkage */
```

Here, the identifier modified by `extern` has internal linkage, not external linkage. From the first two lines of the above table, we can summarize the rule we mentioned before: "Whether a function declaration is added with the `extern` keyword or not is the same." The table also explains that it is allowed to define functions at file scope, but it is not allowed to define functions at block scope, or function definitions cannot be nested. In addition, the static keyword is not allowed to declare functions in block scope.

Since all functions must be of file scope, function definitions may only be placed at the same location of file-scope declarations. 

**Table: the effects of storage class specifiers on variable linkages**

| Storage class | File scope declaration | Block scope declaration |
| :-            | :-                     | :-                      |
| none          | external linkage       | no linkage              |
| `extern`      | previous linkage       | previous linkage        |
| `static`      | internal linkage       | no linkage              |

Similar to `extern` block scope declarations of functions we discussed previous, `extern` block scope declaration of a variable serves the same purpose.  In line (2), we explicitly states that we are using `a` as a global variable in `foo`.  The behaviour of the program does not change even if we remove line (2).  However, this creates two benefits: (1) slightly increases reability of the code, and, more importantly, (2) prohibit a programmer from accidentally shallow the global variable `a` be a local variable (like in line (3)). 

**Table: the effects of storage class specifiers on variable storage durations**

| Storage class | File scope declaration | Block scope declaration |
| :-            | :-                     | :-                      |
| none          | external linkage       | no linkage              |
| `extern`      | previous linkage       | previous linkage        |
| `static`      | internal linkage       | no linkage              |

**Table: the effects of storage class specifiers on definitions**

| Storage class | File scope declaration | Block scope declaration |
| :-            | :-                     | :-                      |
| none          | tentative definition   | definition              |
| `extern`      | Definition if  initializer supplied. <br>Not a definition otherwise.     | not a definition          |
| `static`      | tentative definition   | definition      |

This table summarizes whether a declaration of a variable will be regarded as a definition by the compiler.  "Definition" means the declaration also serves as a definition, and "not a definition" means it cannot server as a definition. 
What is a "tentative definition"? 
Give a file-scope variable declaration, suppose the variable is not modified by a storage class specifier, or is modified by the static keyword.
If it has an initializer, the compiler considers it a variable definition. If it does not have an initializer, the compiler will remember the declaration.  If the program file has a clear definition of this variable in other places, the compiler uses the clear definition. If the program file does not have a clear definition of this variable, it uses this tentative definition [Note 32], in which case the variable is initialized to 0.

For the `extern` keyword, things became more complex: 
It is always _not_ consider a definition, unless an initializer is supplied [Note B].  When an initializer is supplied, it is consider a definition instead.  However, writing code in this way will trigger a warning by `gcc`, so it is advisible not to use an initializer in a definition with `extern`. 

**Table: the effects of storage class specifiers on the requirements on initializers**

| Storage class | File scope declaration | Block scope declaration |
| :-            | :-                     | :-                      |
| none          | static initializer     | dynamic initializer     |
| `extern`      | static initializer     | no initializer          |
| `static`      | static initializer     | static initializer      |

This table summarizes the initializers that may be used.  If a variable definition requires initializer to be static, it means it can only be initialized by a compile-time constant (expression). 

TODO: better example/discussion questions for this subsection 

TODO: Put examples about linkage here to replaced example 6.9.2.1  in [C11]

TODO: compose Exercise 4. 

- [Note B]: In C89 era, you were not allowed to supply an initializer for an `extern` variable declaration, which means `extern` declaration is always not a definition. 
- [Note 32]: (removed for simplicity).


### Exercises and discussion questions

1. We mentioned that macro definition should always in upper cases, by convention, in order to prevent strange errors.  Write a code file that triggers such "strange errors" to prove this. 
2. We mentioned that it can be correct to define `static` or `inline` functions in a header file.  However, it is almost always a bad idea to define a `static` function in a header file, unless it is `static inline`.  Why it is a bad idea?  And, why `static inline` is an exception? 
3. If instead of `static inline`, you want a function to have an inline implementation and has a non-inline implementation which has external linage, what's the correct way to declare and define it?  Reason it by yourself first, then see cppreference.com to verify. 
4. The following code has many variable declarations, definitions, and initializations.
Some of the statements triggers a compiler/linker error.  Point out what are the statements, what are the errors (including whether it is given by the compiler or the linker), and what are the reasons.  Then correct the code.  Next, point out the linkage of each variable and whether each declaration statement is a definition. 
```c
// TODO: write the code
```
## 3. Static library

Sometimes, we need to compile a set of code into a library, which is used in many projects. For example, `libc` is such a library. We use the library functions in `libc` (such as `printf`) and the variables in `libc` (such as the `environ` variable we will discuss later) in different programs. This section introduces how to create such a library.

We continue to use the `stack.c` example. For demonstration purpose, we split `stack.c` into four program files (although there is no practical need in a realistic project), simplify `main.c`, and keep the header file `stack.h` unchanged. The code used in this section is as follows:

```c
/* stack.c */
char stack[512];
int top = -1;
```

```c
/* push.c */
extern char stack[512];
extern int top;

void push(char c)
{
    stack[++top] = c;
}
```

```c
/* is_empty.c */
extern int top;

int is_empty(void)
{
    return top == -1;
}
```

```c
/* stack.h */
#ifndef STACK_H
#define STACK_H
extern void push(char);
extern char pop(void);
extern int is_empty(void);
#endif
```

```c
/* main.c */
#include <stdio.h>
#include "stack.h"

int main(void)
{
    push('a');
    return 0;
}
```

The directory structure now is: 
```
$ tree .
.
├── main.c
└── stack
    ├── is_empty.c
    ├── pop.c
    ├── push.c
    ├── stack.c
    └── stack.h

2 directories, 6 files
```

We may use `gcc -c` to compile the `.c` files in our library into an objective file, then use `ar` to pack them as a static library (`.a`) file: 

```bash
$ gcc -c stack/stack.c stack/push.c stack/pop.c stack/is_empty.c
$ ar rs libstack.a stack.o push.o pop.o is_empty.o
ar: creating libstack.a
```

By convention, every library file's name starts with `lib`.  `ar` is a archiver that has similar functionality to `tar`, meaning the library is indeed an _archive file_, and it hence bears a `.a` suffix.  The option `r` means, "add the following file list to the file package; if the file package does not exist, create it; if there is a file with the same name in the file package, replace it with the new one."  The option `s` is used specifically for generating static libraries, which creates an index for the static library. This index is used by the linker. The `ranlib` command can also create an index for a static library. The above command is equivalent to:

```bash
$ ar r libstack.a stack.o push.o pop.o is_empty.o
$ ranlib libstack.a
```

Now, we may use `gcc` to compile `main.c` and link it with `libstack`: 

```bash
gcc main.c -L. -lstack -Istack -o main
```

- The `-L` option tells the compiler where to find the required library files. `-L.` means to find them in the current directory. 
- `-lstack` tells the compiler to link the `libstack` library. 
- The `-I` option tells the compiler where to find the header files. 

Note that even if the library file is in the current directory, the compiler will not find it by default, so the `-L.` option cannot be omitted. The directories that the compiler will find by default can be viewed with the `-print-search-dirs` option:

```bash
$ gcc -print-search-dirs
install: /usr/lib/gcc/x86_64-pc-linux-gnu/13.2.1/
programs: =/usr/lib/gcc/x86_64-pc-linux-gnu/13.2.1/:/usr/lib/gcc/x86_64-pc-linux-gnu/13.2.1/:/usr/lib/gcc/x86_64-pc-linux-gnu/:/usr/lib/gcc/x86_64-pc-linux-gnu/13.2.1/:/usr/lib/gcc/x86_64-pc-linux-gnu/:/usr/lib/gcc/x86_64-pc-linux-gnu/13.2.1/../../../../x86_64-pc-linux-gnu/bin/x86_64-pc-linux-gnu/13.2.1/:/usr/lib/gcc/x86_64-pc-linux-gnu/13.2.1/../../../../x86_64-pc-linux-gnu/bin/
libraries: =/usr/lib/gcc/x86_64-pc-linux-gnu/13.2.1/:/usr/lib/gcc/x86_64-pc-linux-gnu/13.2.1/../../../../x86_64-pc-linux-gnu/lib/x86_64-pc-linux-gnu/13.2.1/:/usr/lib/gcc/x86_64-pc-linux-gnu/13.2.1/../../../../x86_64-pc-linux-gnu/lib/../lib/:/usr/lib/gcc/x86_64-pc-linux-gnu/13.2.1/../../../x86_64-pc-linux-gnu/13.2.1/:/usr/lib/gcc/x86_64-pc-linux-gnu/13.2.1/../../../../lib/:/lib/x86_64-pc-linux-gnu/13.2.1/:/lib/../lib/:/usr/lib/x86_64-pc-linux-gnu/13.2.1/:/usr/lib/../lib/:/usr/lib/gcc/x86_64-pc-linux-gnu/13.2.1/../../../../x86_64-pc-linux-gnu/lib/:/usr/lib/gcc/x86_64-pc-linux-gnu/13.2.1/../../../:/lib/:/usr/lib/
```

The items listed in "libraries" are the search paths for library files, with each path separated by a colon `:`. The compiler will look for the library specified by the `-l` option in these search paths and the path specified by the `-L` option. For example, for `-lstack`, the compiler will first look for the shared library `libstack.so`. If it exists, it will link it. If it does not exist, it will look for the static library `libstack.a`. If it exists, it will link it. So the compiler prefers shared libraries. If you want the compiler to only link static libraries, you can specify the `-static` option.

So what's the difference between linking a shared library and a static library? As discussed in Chapter 19 Section 2 "main function and startup routine", when "linking" the `libc` shared library, the linker only specifies the dynamic linker and the library files required by the program, and does not actually do the linking. The `libc` library functions called in the executable file main are still undefined symbols, which need to be dynamically linked at runtime. But when linking a static library, the linker will take out the object files from the static library and truly link them with the executable file. We can see the executable file main generated in the previous step through disassembly:
```bash
$ objdump -dS main
...
0000000000001119 <main>:
    1119:	55                   	push   %rbp
    111a:	48 89 e5             	mov    %rsp,%rbp
    111d:	bf 61 00 00 00       	mov    $0x61,%edi
    1122:	e8 07 00 00 00       	call   112e <push>
...
000000000000112e <push>:
    112e:	55                   	push   %rbp
    112f:	48 89 e5             	mov    %rsp,%rbp
    1132:	89 f8                	mov    %edi,%eax
    1134:	88 45 fc             	mov    %al,-0x4(%rbp)
...
```

Interestingly, `main.c` only calls the `push` function, so the linked executable file only contains functions from `push.o`.  Hence, `pop` and `is_empty` are not included in the final executable. This is a benefit of using static libraries, as the linker can take only the necessary parts from the static library for linking. Suppose you directly link those object files with `main.c`:

```c
$ gcc main.c stack.o push.o pop.o is_empty.o -Istack -o main
```

Then unused functions will also be linked. 
Of course, another benefit is that using a static library only requires writing one library file name, rather than a long string of object file names.


## 4. Shared Library 

In this section, we will discuss _shared libraries_.  Object files that make up a shared library are different from regular object files. When compiling, you need to add the `-fPIC` option, for example:

```bash
$ gcc -c -fPIC stack/stack.c stack/push.c stack/pop.c stack/is_empty.c
```

The `-f` flag is used to specify some compilation options, one of which is `PIC`, which means generating _Position Independent Code_. 

On the contrary, regular object files are called _relocatable_. During linking, the addresses of the segments in the object file can be _relocated_, and the instructions need to be modified during relocation. 

The details are left as an investigation problem in the exercises. 

Now, let's compile the library and link it with `main`: 

```bash
$ gcc -c -g -fPIC stack/stack.c stack/push.c stack/pop.c stack/is_empty.c
$ gcc -shared -o libstack.so stack.o push.o pop.o is_empty.o
$ gcc main.c -g -L. -lstack -Istack -o main
$ ./main 
./main: error while loading shared libraries: libstack.so: cannot open shared object file: No such file or directory
```

Surprisingly, the library and executable compiled without any issue, but the executable failed to execute, claiming `libstack.so` not found. 

TODO

TODO: Briefly explain the procedure of creating so and running dynamically linked executable. 

TODO: then talk about position independent code

TODO: we shall omit the detail investigation (or make it an exercise)

### Summary

There are three important paths for shared libraries: 
1. The directory where the compiler tries to find the library, specified using `-L` in GCC. 
2. The directory where the compiler tries to find the header files, specified using `-I` in GCC. 
3. The directory where the dynamic linker tries to find the shared library. 


### Exercises

1. (optional) Compare relocatables and position independent code (using `objdump`).  See their difference before and after linking.  Try compile using
```bash
$ gcc -c -g stack/stack.c stack/push.c stack/pop.c stack/is_empty.c
```
and 
```bash
$ gcc -c -g -fPIC stack/stack.c stack/push.c stack/pop.c stack/is_empty.c
```

