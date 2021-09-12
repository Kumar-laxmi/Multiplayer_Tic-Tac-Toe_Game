let flag=1;
let winner="";
            function PRINT(clicked_id)
            {
                if(document.getElementById(clicked_id).value=="")
                {
                    if(flag%2!=0)
                    {
                        document.getElementById(clicked_id).value="X";
                    }
                    else
                    {
                        document.getElementById(clicked_id).value="O";
                    }
                    flag=flag+1;
                }
            }
            function RESET()
            {
                location.reload();
            }
            function COMPUTE()
            {
                var arr = new Array(9);
                var data = new Array(9);
                var flag=0;
                for(var i=0;i<9;i++)
                {
                    data[i]=-1;
                }
                arr[0] = document.getElementById("box1").value;
                arr[1] = document.getElementById("box2").value;
                arr[2] = document.getElementById("box3").value;
                arr[3] = document.getElementById("box4").value;
                arr[4] = document.getElementById("box5").value;
                arr[5] = document.getElementById("box6").value;
                arr[6] = document.getElementById("box7").value;
                arr[7] = document.getElementById("box8").value;
                arr[8] = document.getElementById("box9").value;
                for(var i=0;i<9;i++)
                {
                    if(arr[i]=="X")
                       data[i]=1;
                    if(arr[i]=="O")
                       data[i]=0;
                }
                if(data[0]==data[1] && data[1]==data[2] && data[0]!=-1)
                {
                    if(data[0]==1)
                        alert("X is the winner");
                    if(data[0]==0)
                        alert("O is the winner");
                }
                else if(data[3]==data[4] && data[4]==data[5] && data[3]!=-1)
                {
                    if(data[3]==1)
                        alert("X is the winner");
                    if(data[3]==0)
                        alert("O is the winner");
                }
                else if(data[6]==data[7] && data[7]==data[8] && data[6]!=-1)
                {
                    if(data[6]==1)
                        alert("X is the winner");
                    if(data[6]==0)
                        alert("O is the winner");
                }
                else if(data[0]==data[3] && data[3]==data[6] && data[0]!=-1)
                {
                    if(data[0]==1)
                        alert("X is the winner");
                    if(data[0]==0)
                        alert("O is the winner");
                }
                else if(data[1]==data[4] && data[4]==data[7] && data[1]!=-1)
                {
                    if(data[1]==1)
                        alert("X is the winner");
                    if(data[1]==0)
                        alert("O is the winner");
                }
                else if(data[2]==data[5] && data[5]==data[8] && data[2]!=-1)
                {
                    if(data[2]==1)
                        alert("X is the winner");
                    if(data[2]==0)
                        alert("O is the winner");
                }
                else if(data[0]==data[4] && data[4]==data[8] && data[0]!=-1)
                {
                    if(data[0]==1)
                        alert("X is the winner");
                    if(data[0]==0)
                        alert("O is the winner");
                }
                else if(data[2]==data[4] && data[4]==data[6] && data[2]!=-1)
                {
                    if(data[2]==1)
                        alert("X is the winner");
                    if(data[2]==0)
                        alert("O is the winner");;
                }
            }