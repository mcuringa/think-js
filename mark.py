# mark.py
# by:mxc
"""
Convert an rst chapter in Think Python to Mardkown.
"""

import sys
import traceback

def skip_index(lines):
    line = lines.pop(0)
    while line.startswith(" "):
        line = lines.pop(0)

    return

def parse_image(lines):
    tmpl = "![](figs/{})"
    line = lines.pop(0)
    img = line.split("/")[-1].strip()

    return tmpl.format(img)

def parse(lines, out=""):
    if len(lines) == 0:
        return out

    line = lines[0]
    if ".. sourcecode:: python3" in line:
        lines.pop(0)
        code = parse_code(lines)
        out += code
    elif ".. index::" in line:
        skip_index(lines)
    elif ".. image::" in line:
        code = parse_image(lines)
        out += code
    else:
        out += lines.pop(0)
    
    return parse(lines, out)

def parse_code(lines):
    tmpl = """
~~~~~~~~~~~~~~~~~~~~~~~~~~~~{{.python{}}}{}~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
"""
    numbers = ""
    if ":linenos:" in lines[0]:
        numbers = " .numberLines"
        lines.pop(0)

    if len(lines) == 0:
        print("ran out of lines before loop")
        print(line)
        return ""

    code = ""
    line = lines.pop(0)

    while line.startswith(" ") or len(line.strip()) == 0:
        code += line
        if len(lines) == 0:
            print("ran out of lines in loop")
            print(code)
            return ""

        line = lines.pop(0)
    
    code = code.replace(" " * 8, "")

    return tmpl.format(numbers, code)

def convert(f):
    lines = list(open(f + ".rst"))
    out = parse(lines)
    f = open(f + ".md",'w')
    f.write(out)
    f.flush()
    f.close()


def main(rst):
    if rst.endswith(".rst"):
        rst = rst[:-4]
    # print(rst)
    # print("Converting {}.rst to {}.md".format(rst,rst))
    # print("The following images were found while converting:")
    convert(rst)



if __name__ == "__main__":
    main(sys.argv[1])

