import 'package:flutter/material.dart';

class NumberWidget extends StatefulWidget {
  @override
  createState() => NumberWidgetState();
}

class NumberWidgetState extends State<NumberWidget> {
  int _count = 0;

  void _increase() {
    setState(() => _count++);
  }

  @override
  Widget build(BuildContext context) {
    print('NumberWidgetState build');
    return new Scaffold(
      body: Center(
        child: Text(
          'Button tapped $_count time${_count == 1 ? '' : 's'}.'
        ),
    ),
      floatingActionButton: FloatingActionButton(onPressed: _increase),
    );
  }

}

