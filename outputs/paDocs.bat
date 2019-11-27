(for /R  %%A in (*.cub) do echo %%~fA %%~zA) | findstr /v "echo" >"E:\Program Files\ibm\cognos\tm1_64\webapps\tm1web\paDoc\outputs\assessedcubs.txt"
