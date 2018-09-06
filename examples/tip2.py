# tip2.py
# example of an interactive tip calculator
# by: mxc

def welcome():
    """
        Give the user a welcome message.
    """
    print("""

-----------------------------------
   Welcome to the Tip Calculator   
-----------------------------------
""")

def calc_tip(bill, pct):
    """
        Calculate the tip on a bill, given the pct of the tip.
        Return the amount of the tip
    """
    tip = bill * (pct * .01) # convert pct to a decimal and calculate
    tip = round(tip, 2) # round the tip to 2 decimal places
    return tip

def get_bill_amt():
    """
        Ask the user to enter the amount of the bill
        and return this amount as a <float>
    """

    return float(input("How much was your total bill: "))

def get_tip_pct():
    """
        Allow the user to choose a tip amount
        from a menu.
    """
    
    print("""
What percent tip do you want to leave?
  1 - 10%, lousy service
  2 - 15%, good service, but I'm cheap
  3 - 20%, the server is hard working and deserves a decent tip
  4 - 25%, outstanding service""")

    menu = input("enter your choice (1-4):")
    
    if menu == "1":
        return 10
    if menu == "2":
        return 15
    if menu == "3":
        return 20
    if menu == "4":
        return 25
    
    return -1 # return -1 for any invalid choice

def show_results(bill, tip, pct):
    """
        Prints a message to the user showing
        the result of the calculations.
    """
    
    total = tip + bill

    print("Bill amount: $" + str(bill))
    print("Tip percentage: " + str(pct) + "%")
    print("Tip amount due: $" + str(tip))
    print("Total with tip: $" + str(total))

    print("""
-----------------------------------
             GOOD BYE      
-----------------------------------
""")

def main():
    """
        Read in the basic information, calcualte the tip
        and the share, then dispaly the results to the user.
    """
    
    welcome()
    myBill = get_bill_amt()
    pct = get_tip_pct()
    tip = calc_tip(myBill, pct)
    show_results(myBill, tip, pct)


if __name__ == "__main__":
    main()
