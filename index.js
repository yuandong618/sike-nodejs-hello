module.exports=function greet (name,drunk)
{
	if(drunk)
	{
		return 'Hello,'+name+' you look very sexy today!';
	}
	else
	{
		return 'Hello,'+name;
	}
}