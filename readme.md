https://github.com/suyash-more/Cloud-Computing-Projects
https://drive.google.com/drive/u/0/folders/1me_nJJh0fvdDOXX3ew2jzGQpoP7f_iFt


Download and install Oracle's Virtual Box. (Reboot needed after installation)

Download Ubuntu VMDK Image.

Launch Virtualbox and create a new VM.

Click on new and mention the Name and the machine folder along with the Type and Version of the Machine to be created.

Assign memory size for our VM (1024 MB sufficient for now).

Select the option Use an existing virtual hard disk file and locate the donwloaded VMDK image below and create VM.

🖧 Step 1: Configure Internal Network in VirtualBox
Shut down both VMs if they are running.

Open Oracle VirtualBox Manager.

For each VM (Kali and Ubuntu):

Go to Settings → Network → Adapter 1.

Enable the adapter and set:

Attached to: Internal Network

Name: intnet (or any custom name, just make sure it's the same on both)

▶ Step 2: Start Both VMs
Start the Kali and Ubuntu virtual machines.

🔍 Step 3: Identify Network Interface Name
In each VM, open the terminal and run:

ip a
Note the interface name (e.g., enp0s3, eth0) that corresponds to the internal network.

⚙ Step 4: Assign Temporary Static IP Addresses
On Ubuntu (assuming interface is enp0s3):

sudo ip addr add 192.168.56.2/24 dev enp0s3

On Kali Linux (assuming interface is eth0):

sudo ip addr add 192.168.56.3/24 dev eth0

Use the correct interface name based on ip a output.

✅ Step 5: Verify the IP Address
Run this command on both VMs to confirm:

ip addr show

You should see the assigned IP (192.168.56.x) under the respective interface.

📡 Step 6: Test Network Connectivity
From Kali, ping Ubuntu:
ping 192.168.56.2

From Ubuntu, ping Kali:
ping 192.168.56.3
If you get replies, the internal network is set up correctly and both VMs can communicate.

Step 7 : Now you can use your preferred method scp / ssh to transfer the files between the vm
Done..!!!!
