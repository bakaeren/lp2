https://github.com/suyash-more/Cloud-Computing-Projects
https://drive.google.com/drive/u/0/folders/1me_nJJh0fvdDOXX3ew2jzGQpoP7f_iFt


Download and install Oracle's Virtual Box. (Reboot needed after installation)

Download Ubuntu VMDK Image.

Launch Virtualbox and create a new VM.

Click on new and mention the Name and the machine folder along with the Type and Version of the Machine to be created.

Assign memory size for our VM (1024 MB sufficient for now).

Select the option Use an existing virtual hard disk file and locate the donwloaded VMDK image below and create VM.

Now we have to create a NAT Network so go to File -> Preferences -> Network -> Add a New NAT Network (Click on +)

Right click and edit the Network name and CIDR if needed. Example :

Name - My VMbox Network
CIDR - 172.168.2.0/24 and save the changes.
Repeat the process of launching the VM for 2 instances.

Now go to the setting, go to the network setting and change the adapter to NAT Network and and select the NAT Network you made ( in our case : My VMbox Network ) and click ok.

Launch the VM now.

Install the net-tools to know the IP's of the instance.

$ sudo apt install net-tools
$ sudo apt update
$ sudo apt install openssh-server

To know the IP address
$ ifconfig
Now the IP will be in the range of 172.168.2.*

 * - any number in the range of 1 to 254 (total 256 addresses)
Now create a file and write something into it.
$ touch tranfer.txt
$ nano transfer.txt
-> hey, How are you?
ctrl + X and save
Some Commands for Linux Based Distros:

ls - list all the files and directories
cat - show the content inside a file
scp - it will help us to copy files from one vm to other
cd - change directory
mkdir - make a new directory
touch - it makes a new file 
nano - nano is a editor inside linux os

If your file is on the VM with IP 172.168.2.4 and the second VM's IP is 172.168.2.5.

Tranfer the file using SCP

$ scp tranfer.txt vagrant@172.168.2.5:/home/vagrants
Put in the password of the 2nd VM and done.

Check for the file in the Second VM under the /home/vagrant directory.

Done..!!!!