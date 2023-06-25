import pandas as pd

# Load the Excel file
excel_file = "sys_security_acl.xlsx"
df = pd.read_excel(excel_file)

# Iterate over each row
for index, row in df.iterrows():
    # Create a new file for each row
    #  file_name = 'row_' + str(index) + '.js'  # Adjust the file naming as desired

    # Get the value from a specific cell
    print("index = ", index)

    row_index = index  # Specify the row index (0-based)
    script_column_name = 'Script'  # Specify the column name where script is stored
    file_name_column = 'Name'  # specifiy the column where name is stored

    cell_value = df.loc[row_index, script_column_name]
    file_name = df.loc[row_index, file_name_column]

    # Extract the row values and save them to the file
    # row_values = row.dropna().tolist() #this is not required

    with open(file_name, 'w') as f:
        f.write(str(cell_value) + '\n')

    # if index > 0:

        # for value in cell_value:
        #   f.write(str(value) + '\n')
