#include "main.h"

/**
 * _strlen - counts string length
 * @s: Pointer to the string
 * Return: String length
 */
int _strlen(char *s)
{
	int i = 0, length = 0;

	if (s != NULL)
		while (s[i] != '\0')
		{
			length++;
			i++;
		}
	else
		return (0);
	return (length);
}
